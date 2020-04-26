'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ddab887a6b7053ffa9c20217f4b36ed4",
".git/config": "a158426ef711393f500e1258bdb14cfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1c8066f46dd48ae6d11efd06c208b6e8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "0fac31a9927e7c26cb8b467bbdd34513",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f7890200e1d6bec80b3ee577ac0b9649",
".git/logs/refs/heads/master": "f7890200e1d6bec80b3ee577ac0b9649",
".git/logs/refs/remotes/origin/master": "a1698b334a48dda0fc4c7cb651a18443",
".git/objects/04/8f15ac529cda5039002ba009b8c0ff861a8729": "38a23b7beb0f12266d72f51bc8852ccc",
".git/objects/0c/bccc44bb9035aa6669c291c8786389c89a192e": "68d11f9e659c433c61c749e6bef0e1a4",
".git/objects/0d/6d79c1fa18a6789dd5469b7b4df51d4ed039a1": "2203cc490bb4f71e9462863e6506d5ab",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/ef5599267c2cd3f7cf15ed8b62e9ace41835cc": "3151b4cf0f82f2d3141b1e9cde8c2c05",
".git/objects/20/18eae6a16845209c680898c4a656c8400b5867": "f843572cbad0476eb4d0a1e58d501006",
".git/objects/24/3034a7bd122c7109578d7ab224815ba15f823a": "0d10bed3c5ba251c6bad0ae82d7c53ec",
".git/objects/24/73bb3d89ec406cc47a764230043503eb2f388d": "19c3747fb924339ddc06bde3606c8c98",
".git/objects/2e/0d3d1cdadb9bd48afe92e6331303914e348a06": "5df4cf255871d0d789fa8c4a1eeb7fca",
".git/objects/30/b242937382f3bc9414d09051e75749280d1007": "9a5a4f67a146d5d003900a25075d0281",
".git/objects/33/694c477a24be0f213069a67f2ed276bb3417a1": "476934de0c7443081103352e8cbe5128",
".git/objects/3b/d8049163557832d35358e410c6cfdd74ffd0b8": "6fed227c04751aff2dd215c386787e20",
".git/objects/41/e2e8d8ee50dc886de98a16ae80ead1fa96c934": "28538c5b22845166a42201368e65decb",
".git/objects/42/698921603b838290ca2598a31c95ad4915880c": "b59c6c3636d64da212b3533e2ed17e69",
".git/objects/47/90cd3fbdb8c2dae94eae47be0cff1978dd2363": "0cfb12fa06ce0747a12a78872cf8c949",
".git/objects/4a/b53a8556deb439a2564d843da85539c97f2a83": "0309ed6764977f5b6479456f67918cd4",
".git/objects/5e/8062202aae725f9bbde888b5fcf58d4c887ab0": "fc5167c99bb38552084b2b3ebd191e1b",
".git/objects/62/9b330bbf39a2242f178d7c482722376e22583b": "211d0b3c548f3fc4506720df15297a00",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/6f/ce5215bd833e073ebc550492160b5cd8f506a7": "33fd324cf7f6c3a6862d2e61d839a50d",
".git/objects/76/420af4ccb6e9a764a2f23ee5425b67d9a4561e": "aac3019e6c63b00d6ae218cecec466d8",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/c1443bc1d9e76bb494f43f1f7c9dedebfd2c4a": "8a27bce745e426a3e63fa8cc5c932439",
".git/objects/8e/138e74a547320463a35e7fc0170510c2004e17": "e62aad8ce0edffb905e2bac1b91fd7a6",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9c/be4a2dd49b8a0922fc1a3875efce2ad8a32410": "dddb3a7f2ed1040015b8cde91fb43378",
".git/objects/9f/9e1f6340d73c14529eea9ccf241c06a1e4e4d3": "b000ceeb6d3fb013fde52c3d35e27f4a",
".git/objects/a9/d4a6e51fa4b21434bf3b41a6c1f48b8e9e2561": "ebff68fdf2ce7364e390983e637eff05",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/be/c62b880215e90b7397d0176c19c17a8b2c64c8": "2a69901e2f58d003a597e69b839eee49",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d2/45ac532acf6a15f95264f01e11a7aa625fd8f7": "986260fcdc1881cb4ec98f521cfa1e0e",
".git/objects/db/0e70d5d42d5a4e9df0db6491f647b3f33bea76": "e53914d68aa8f045cd98a5c437ca03d5",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/d9f51ca4478149bc46c959dd4b995e561a56b2": "a184eded71d33a059122865436d1fe6d",
".git/objects/e3/fa44ead2515b609f824fe5406961c8ad5f6afa": "b94c33aa696cbf375d02bc796bfdce64",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/f2/bfc67163a098adf9e7df7af43b7069611e018c": "98a8a9742d0bc62942a9a0e532a8f3e0",
".git/objects/fb/3512c3c2f99d9210e97b813853eef70377b5e3": "8f194004d05f5ece56155cc777218521",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/pack/pack-14a89e7cb23bd0f0c8e316338864795c0e5b5f9a.idx": "5625383fc64f4773042168c5a7dfad63",
".git/objects/pack/pack-14a89e7cb23bd0f0c8e316338864795c0e5b5f9a.pack": "44b965f1647324db96cb8fa601db8bab",
".git/ORIG_HEAD": "616f501e0c0b0be5afde7c3477a04d06",
".git/refs/heads/master": "3830a4c93a1f8308ebe8176bb1670f1b",
".git/refs/remotes/origin/master": "3830a4c93a1f8308ebe8176bb1670f1b",
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
"assets/LICENSE": "73355f83981b050ec4e858f59711bc5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.jpg": "4878d79c392e782fc46cfbb16687c398",
"icons/apple-icon-57x57.jpg": "4878d79c392e782fc46cfbb16687c398",
"index.html": "f04715ceede81b77dd3d02d2fbe2a081",
"/": "f04715ceede81b77dd3d02d2fbe2a081",
"main.dart.js": "0f05cbdf7485273959eee65d27e239f6",
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
