const CACHE = 'dst-cache-v3.108'; // bump this number on every update

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // only handle normal web requests (skips chrome-extension://, POSTs, etc.)
  if (req.method !== 'GET' || !url.protocol.startsWith('http')) return;

  // keep just the app itself and static libraries for offline use. Live feeds, stream thumbnails and drop images go straight
  // to the network: caching every thumbnail (a new URL each minute) used to fill the cache without limit
  const keep = url.origin === self.location.origin || ['script', 'style', 'font'].includes(req.destination);
  if (!keep || req.destination === 'video') return;

  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
