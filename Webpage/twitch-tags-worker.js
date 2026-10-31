/*
 * Twitch language + tags proxy (Cloudflare Worker, free plan is plenty)
 *
 * Why: Klei's ambassador list has no language or tags, and Twitch only hands those out to apps that hold a secret token,
 * which can't live inside a web page. This tiny worker holds the secret and answers with just the public bits.
 *
 * Setup (about 10 minutes, once):
 *   1. https://dev.twitch.tv/console -> "Register Your Application". Name it anything, OAuth Redirect URL http://localhost,
 *      Category "Website". Open it again, copy the Client ID and press "New Secret".
 *   2. https://dash.cloudflare.com -> Workers & Pages -> Create -> Worker. Paste this whole file and deploy.
 *   3. Worker -> Settings -> Variables and Secrets: add TWITCH_CLIENT_ID and TWITCH_CLIENT_SECRET (as secrets).
 *   4. Put the worker's URL into the TWITCH_TAGS_URL line near the top of index.html's script. That's it.
 *
 * GET /?logins=eternal_grudge,maiza  ->  { "eternal_grudge": { "language": "en", "tags": ["English", "Drops Enabled"] }, ... }
 * Only channels that are live right now come back, which is exactly what the Ambassadors tab lists.
 */
const ALLOWED_ORIGINS = ['https://clifffordw.github.io', 'http://127.0.0.1:5500', 'http://localhost:5500', 'http://127.0.0.1:8765', 'http://localhost:8765'];
const CACHE_SECONDS = 60;
let token = null, tokenExpires = 0;

async function appToken(env) {
  if (token && Date.now() < tokenExpires) return token;
  const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${env.TWITCH_CLIENT_ID}&client_secret=${env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`, { method: 'POST' });
  if (!res.ok) throw new Error('token ' + res.status);
  const data = await res.json();
  token = data.access_token;
  tokenExpires = Date.now() + (data.expires_in - 600) * 1000;
  return token;
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Vary': 'Origin',
      'Cache-Control': `public, max-age=${CACHE_SECONDS}`
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    const logins = [...new Set((new URL(request.url).searchParams.get('logins') || '').toLowerCase().split(','))]
      .filter(l => /^[a-z0-9_]{1,25}$/.test(l)).slice(0, 100).sort();
    if (!logins.length) return new Response('{}', { headers: { ...cors, 'Content-Type': 'application/json' } });

    const cache = caches.default, cacheKey = new Request('https://tags.cache/' + logins.join(','));
    const hit = await cache.match(cacheKey);
    if (hit) return new Response(hit.body, { headers: { ...cors, 'Content-Type': 'application/json' } });

    try {
      const res = await fetch('https://api.twitch.tv/helix/streams?first=100&' + logins.map(l => 'user_login=' + l).join('&'), {
        headers: { 'Client-Id': env.TWITCH_CLIENT_ID, 'Authorization': 'Bearer ' + await appToken(env) }
      });
      if (!res.ok) throw new Error('streams ' + res.status);
      const out = {};
      for (const s of (await res.json()).data || []) out[s.user_login.toLowerCase()] = { language: s.language || '', tags: s.tags || [] };
      const body = JSON.stringify(out);
      ctx.waitUntil(cache.put(cacheKey, new Response(body, { headers: { 'Cache-Control': `max-age=${CACHE_SECONDS}` } })));
      return new Response(body, { headers: { ...cors, 'Content-Type': 'application/json' } });
    } catch (e) {
      return new Response('{"error":"upstream"}', { status: 502, headers: { ...cors, 'Content-Type': 'application/json' } });
    }
  }
};
