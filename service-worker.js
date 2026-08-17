const CACHE_NAME = "selection-pro-v1";

const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];


/* ======================================
   INSTALL
====================================== */

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );

});


/* ======================================
   ACTIVATE
====================================== */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(cacheNames => {

      return Promise.all(

        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))

      );

    }).then(() => self.clients.claim())

  );

});


/* ======================================
   FETCH
====================================== */

self.addEventListener("fetch", event => {

  const request = event.request;

  /* Only handle GET requests */
  if (request.method !== "GET") {
    return;
  }

  /*
     HTML pages:
     Network first so that new Current Affairs
     and other updates appear immediately.
  */

  if (request.mode === "navigate") {

    event.respondWith(

      fetch(request)
        .then(response => {

          const responseClone = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(request, responseClone);
            });

          return response;

        })
        .catch(() => {

          return caches.match(request)
            .then(cachedResponse => {

              return cachedResponse || caches.match("/index.html");

            });

        })

    );

    return;
  }


  /*
     CSS, JS, images and other files:
     Cache first for faster loading.
  */

  event.respondWith(

    caches.match(request)
      .then(cachedResponse => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then(response => {

            if (
              !response ||
              response.status !== 200 ||
              response.type === "opaque"
            ) {
              return response;
            }

            const responseClone = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(request, responseClone);
              });

            return response;

          });

      })

  );

});