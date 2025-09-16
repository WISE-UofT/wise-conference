// Service Worker for WISE Conference - Image Caching Strategy
const CACHE_NAME = 'wise-conference-v1';
const STATIC_CACHE_NAME = 'wise-static-v1';
const IMAGE_CACHE_NAME = 'wise-images-v1';

// Assets to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/lib/bootstrap/css/bootstrap.min.css',
  '/lib/swiper/swiper-bundle.min.css',
  '/js/main.js',
  '/img/favicon.webp',
  '/img/logo.webp',
  '/img/logo-dark-purple.webp',
  '/img/intro-bg.webp'
];

// Critical images to cache on install
const CRITICAL_IMAGES = [
  '/img/speakers/sara-mazrouei.webp',
  '/img/speakers/jennifer-quaglietta.webp',
  '/img/speakers/virginie-coindre.webp',
  '/img/speakers/shawana-habib.webp',
  '/img/recap/cochairs.webp',
  '/img/recap/keynote1.webp'
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        console.log('Caching critical images');
        return cache.addAll(CRITICAL_IMAGES);
      })
    ]).then(() => {
      console.log('Service Worker installation complete');
      self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE_NAME && 
              cacheName !== IMAGE_CACHE_NAME && 
              cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activation complete');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (request.destination === 'document' || 
             request.destination === 'style' || 
             request.destination === 'script') {
    event.respondWith(handleStaticRequest(request));
  } else {
    event.respondWith(handleOtherRequest(request));
  }
});

// Image caching strategy: Cache First with Network Fallback
async function handleImageRequest(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('Serving image from cache:', request.url);
      return cachedResponse;
    }

    // If not in cache, fetch from network
    console.log('Fetching image from network:', request.url);
    const networkResponse = await fetch(request);
    
    // Cache the response for future use
    if (networkResponse.ok) {
      const cache = await caches.open(IMAGE_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Image request failed:', error);
    // Return a fallback image or empty response
    return new Response('', { status: 404, statusText: 'Image not found' });
  }
}

// Static assets strategy: Network First with Cache Fallback
async function handleStaticRequest(request) {
  try {
    // Try network first for static assets to get updates
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Update cache with fresh content
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, serving from cache:', request.url);
    // Fall back to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // If not in cache either, return error
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

// Other requests: Network First
async function handleOtherRequest(request) {
  try {
    return await fetch(request);
  } catch (error) {
    // For other requests, just try cache
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Background sync for pre-caching additional images
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PRECACHE_IMAGES') {
    const imageUrls = event.data.urls;
    console.log('Pre-caching additional images:', imageUrls);
    
    event.waitUntil(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return Promise.all(
          imageUrls.map(url => {
            return fetch(url).then(response => {
              if (response.ok) {
                return cache.put(url, response);
              }
            }).catch(err => {
              console.log('Failed to pre-cache:', url, err);
            });
          })
        );
      })
    );
  }
});
