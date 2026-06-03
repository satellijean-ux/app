const CACHE_NAME = 'aph-socorros-cache-v1';
const STATIC_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/pwa-icon.png'
];

// Install Event: Pre-cache core shell resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching Core Offline Resources');
      return cache.addAll(STATIC_RESOURCES);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Cleanup older caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Cleaning Old Cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Smart Offline Caching Strategies
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Focus only on local assets (same origin)
  if (url.origin !== self.location.origin) {
    return;
  }

  // Handle SPA navigation requests: Always fallback to index.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match('/index.html') || caches.match('/');
      })
    );
    return;
  }

  // Avoid caching non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle assets (JS, CSS, Images, Fonts, etc.)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Cache found - serve from cache, and fetch newer version in background (Stale-While-Revalidate)
        // for JS, CSS, and other dynamic local assets
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, networkResponse.clone());
            });
          }
          return networkResponse;
        }).catch(() => {/* Ignore network errors of background fetch */});

        return cachedResponse;
      }

      // Live fetch fallback with runtime caching
      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });

        return networkResponse;
      }).catch((err) => {
        // Network offline & asset not cached
        console.warn('[Service Worker] Resource offline and not cached:', request.url);
        // Fallback for missing images if any
        if (request.destination === 'image') {
          return caches.match('/pwa-icon.png');
        }
      });
    })
  );
});
