'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1a0f83cb5e382bf18de070bbac96971f",
"assets/assets/avatar.jpg": "53391941ad83cf128582fec112a1da55",
"assets/assets/chatbot.png": "28d9bee2426b29f690f55cdecc276b44",
"assets/assets/Discord-Logo-Color.png": "2c21aeda16de354ba5334551a883b481",
"assets/assets/favicon.png": "c07f385fb4d5c2157c197ca7bdd49604",
"assets/assets/FontManifest.json": "4b859210b1cb7cc0af63babc29eac841",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/kevin_logo.jpg": "4878d79c392e782fc46cfbb16687c398",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/lordvins.json": "b4743d825d11d3fc7821e72adea81b44",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "f888d28c6c17cc50ffae25d7a96d9797",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.jpg": "4878d79c392e782fc46cfbb16687c398",
"icons/apple-icon-57x57.jpg": "4878d79c392e782fc46cfbb16687c398",
"index.html": "9be9d31592faa6c987b8881e8d36fbe1",
"/": "9be9d31592faa6c987b8881e8d36fbe1",
"main.dart.js": "97fb104f4e74024126b2c4365b52255f",
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
