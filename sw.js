self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("numworks-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./icon-192.png",
        "./icon-512.png"
        // Add other resources like CSS, JS, WASM, etc.
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
