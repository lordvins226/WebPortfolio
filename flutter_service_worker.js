'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "174b29d6d688c2b34f6c1bb7361a8b7e",
".git/config": "a158426ef711393f500e1258bdb14cfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2c5dd4b31bd226e48b8cbc960151eee3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "45d2db226eae9c97b56ceb0479df2c44",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4afcbf49536e79a59cd5c0ad69944ada",
".git/logs/refs/heads/master": "4afcbf49536e79a59cd5c0ad69944ada",
".git/logs/refs/remotes/origin/master": "d67e4f73049db350ec66f9919d424827",
".git/objects/01/6c75496a949ec6a6937440e322f6562876494a": "e6391a85cbc9382cfde96ed4c78a6c76",
".git/objects/01/82951f41aaa2921f923a2897faef9618b3e3e0": "c3dedb8ae0a320628ee16e138a525772",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/7b30bd756ecfc0f2788cc9e1348899b1fc4f3a": "a9b6e6d92b3bdf5df4c6086e2d1759ec",
".git/objects/24/3034a7bd122c7109578d7ab224815ba15f823a": "0d10bed3c5ba251c6bad0ae82d7c53ec",
".git/objects/29/4525df4eeed1928009f6e89c5cfe0ca58ddf12": "9d338bd4f9062d2a9f06bc5cd4383b32",
".git/objects/45/3f3a5f05cd28aa725ab80247456256d9692d2e": "e9828e2006510fb1f4e8b302862752d4",
".git/objects/4f/b473c119a69fe40a557a25e03bbf6b8b913b05": "a446bbe7c4a4d3da83c53ff7b87dc6fd",
".git/objects/55/874a472ce1cb2c076a253f65a1ed1cab81e13e": "291bcd6e7cd7c4d30c582a8b66265b93",
".git/objects/5b/ff9fef2fde2ac08b3bb71a570a38b2cda96364": "c00c61058c119d65a20fb451efbf7ade",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/6a/493fabd0b39d4dcee847c25398ebf499a0743a": "2af20a3e71cc6c623487678914b33f86",
".git/objects/74/12de3ccb1b6997305d45f81be0479e577918c1": "15ecae154c387dc0f0d8e15d92f8bbe2",
".git/objects/74/3f9f6d7360ca496f1995759c0c58ad1b36f47a": "524c66f6ea24670c2351477df95c19d6",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/8e/138e74a547320463a35e7fc0170510c2004e17": "e62aad8ce0edffb905e2bac1b91fd7a6",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/78e41bbb89880cf47d1f018193d4c2bc247276": "3aaa14150e50793b5787e0f68b8863b2",
".git/objects/9f/e08aa17815718264b35a24f17ec20b12ed79a7": "f5f16213b23de279bf00af577fdd5d05",
".git/objects/a1/7a13aa49fdcff4d26ab75548a5719fc8cf8176": "aa9422fa40edfa5536a62eb06ab50f11",
".git/objects/aa/828bb98c1df1f7f608607cde9c9e6037e08070": "6ca3b345fc9e92df4e7a3e2bee525aea",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d8/b7c4870a238ee7013c6b9bb42f248f75600668": "95496d9c0ad398514663369cec903cfe",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/fa/e2a1ff02a72d41e6490662418ec9195974f0e8": "33f9bb947db28eec284a59abd5b3ae0b",
".git/objects/fb/3512c3c2f99d9210e97b813853eef70377b5e3": "8f194004d05f5ece56155cc777218521",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "fcfcfe362101e4c0c7fae01c31410605",
".git/refs/heads/master": "536824d57e49224d2f7082748fc239fa",
".git/refs/remotes/origin/master": "536824d57e49224d2f7082748fc239fa",
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
"main.dart.js": "774576919b85e7ef6e25d344059f3e8a",
"manifest.json": "7166daff1ce93045ce6b58396c066caf",
"README.md": "1311d936a92a330f9aff29845667e041"
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
