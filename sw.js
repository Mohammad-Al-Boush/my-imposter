const CACHE_NAME = 'offline-cache-v1';
// ضع هنا أسماء كل الملفات التي يتكون منها مشروعك ليتم حفظها للأوفلاين
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/icon-192.png',
  '/icon-512.png'
];

// 1. عند تثبيت التطبيق: قم بحفظ الملفات في الكاش فوراً
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. عند تشغيل التطبيق: احذف أي كاش قديم إذا قمت بتحديث التطبيق مستقبلاً
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. الخدعة الحقيقية: عند طلب أي ملف، ابحث عنه في الكاش أولاً (حتى لو كان أوفلاين)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // إذا وجد الملف في الذاكرة أرجعه فوراً، وإلا اطلبه من الإنترنت
      return cachedResponse || fetch(event.request);
    })
  );
});
