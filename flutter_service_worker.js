'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bae79eb508f6e2a73cf6c9a5011954d3",
"assets/assets/avatar.jpg": "53391941ad83cf128582fec112a1da55",
"assets/assets/favicon.png": "c0bc7610cb2c65ccfa683dd87aca572c",
"assets/assets/FontManifest.json": "4b859210b1cb7cc0af63babc29eac841",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/logo.jpg": "9140d299aaba675c0704b15e73168afd",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "c7d51aedd04d576f9a4696aaa6a93b6f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "c0bc7610cb2c65ccfa683dd87aca572c",
"icons/apple-icon-57x57.png": "9e893cb02a10d68058f1d5cb80106d9e",
"index.html": "710fe213d0d4e2ae22a33ff4388dd07b",
"/": "710fe213d0d4e2ae22a33ff4388dd07b",
"main.dart.js": "00e25cc75b344cc667a1712730cda2ed",
"manifest.json": "7166daff1ce93045ce6b58396c066caf"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
