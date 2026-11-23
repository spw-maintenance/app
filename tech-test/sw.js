// ตัวช่วยให้ Chrome ติดตั้งเป็นแอปได้ (ไม่เก็บข้อมูลใด ๆ · ส่งทุกคำขอไปที่เว็บตามปกติ)
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request));
});
