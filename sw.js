
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("aetherion-cache").then(cache => {
      return cache.addAll([
        "sci_fi_adventure.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
