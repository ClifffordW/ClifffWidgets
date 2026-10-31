# Changelog

What's new in Starving For Drops (31 October 2026), summarised for visitors and for ambassadors.

## For everyone

- Star your favourite streamers (even when they're offline) and get an alert when they go live. Mute single streamers with the bell.
- My lists (Ambassadors tab): manage Starred and Hidden in one place, search every ambassador from Klei's full list on Twitch, YouTube and Bilibili, and copy your lists to another device.
- Ambassadors tab: a YouTube filter, profile pictures for everyone, and a language row you can scroll sideways.
- The drop page shows the real drop art, a Don't Starve day clock that follows your own time, and a teaser for the next drop.
- Game updates: reward links Klei hides in the patch notes are pulled into a card at the top, and videos stop when you close them.
- Got a giveaway card from a streamer? Scratch it, then copy the code or open the link. Nothing is ever filled in for you.
- New optional Tutorial button on the Ambassadors tab: a step-by-step tour that lights up each control and explains it.
- On phones: vibration feedback (with an off switch) and a Translate page button to read the site in your language.

## For ambassadors

- Kit editor: one click gives you a zip of images with your name and avatar. Kit and Card have their own editors, a live preview, and a highlight showing what each box changes.
- Giveaway cards: pick a biome look or build your own colours, switch the scenery off, customise the stamp, and choose how winners redeem (code, Klei gift page, Steam key or a direct link). Share the card link.
- OBS widget: show other live ambassadors along the bottom, with a never-show list you can search, and an optional countdown ribbon that no longer overlaps it.
- Drop clock overlay for OBS, with a live preview that fits the box.
- Tutorial buttons on the OBS widget and Kit editor pages walk you through every panel, step by step.
- The tools stay hidden for visitors. Tap the site name seven times, or use a link ending in ?key= followed by your code.

## Needs pushing / setting up

- `Drops/Streamers/drop_universal.html` (also-live strip and never-show list) and `drop_clock.html` must be pushed for the OBS features to work on the live site.
- `Webpage/twitch-tags-worker.js` is a Cloudflare worker that has to be deployed separately for Twitch tags.
