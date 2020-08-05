'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
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
".git/index": "234eb5b50894cc0857ca1e1ae0581055",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "39d91d5571436354eba6ddc6f0df6058",
".git/logs/refs/heads/master": "39d91d5571436354eba6ddc6f0df6058",
".git/logs/refs/remotes/origin/master": "c9e671efde804847da339a3367c49093",
".git/objects/04/8f15ac529cda5039002ba009b8c0ff861a8729": "38a23b7beb0f12266d72f51bc8852ccc",
".git/objects/0c/bccc44bb9035aa6669c291c8786389c89a192e": "68d11f9e659c433c61c749e6bef0e1a4",
".git/objects/0d/6d79c1fa18a6789dd5469b7b4df51d4ed039a1": "2203cc490bb4f71e9462863e6506d5ab",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/10/1b1e685a47b0c718f30aaf8c4f8d186ee3393c": "e4ce2ecc37ef05c8d1fd64030c3a2491",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/ef5599267c2cd3f7cf15ed8b62e9ace41835cc": "3151b4cf0f82f2d3141b1e9cde8c2c05",
".git/objects/19/b83975365a19b50cdc9779b08ffe8dc2486eab": "d332e17d88f8aadfb8c1a24f23664101",
".git/objects/20/18eae6a16845209c680898c4a656c8400b5867": "f843572cbad0476eb4d0a1e58d501006",
".git/objects/24/3034a7bd122c7109578d7ab224815ba15f823a": "0d10bed3c5ba251c6bad0ae82d7c53ec",
".git/objects/24/73bb3d89ec406cc47a764230043503eb2f388d": "19c3747fb924339ddc06bde3606c8c98",
".git/objects/28/3c87542dda12305e0d01dfab9129602cc06f3d": "37a6ec481ca03142db3ed353819365e8",
".git/objects/2e/0d3d1cdadb9bd48afe92e6331303914e348a06": "5df4cf255871d0d789fa8c4a1eeb7fca",
".git/objects/30/b242937382f3bc9414d09051e75749280d1007": "9a5a4f67a146d5d003900a25075d0281",
".git/objects/33/694c477a24be0f213069a67f2ed276bb3417a1": "476934de0c7443081103352e8cbe5128",
".git/objects/39/1961008b70b951563387a041c3e3b5bdb34c86": "046be06ec17ee4141d2349c1a67249d1",
".git/objects/3a/591ef68c0ebc93a7caf73525c6358466117053": "30fb10859c478260a56fffcd33b3fecc",
".git/objects/3b/d8049163557832d35358e410c6cfdd74ffd0b8": "6fed227c04751aff2dd215c386787e20",
".git/objects/3d/b7a62e6fde02ea97aa6eee64e7a6074919ee76": "c8c9bc6d4398ccdaa7102991454df857",
".git/objects/41/e2e8d8ee50dc886de98a16ae80ead1fa96c934": "28538c5b22845166a42201368e65decb",
".git/objects/42/698921603b838290ca2598a31c95ad4915880c": "b59c6c3636d64da212b3533e2ed17e69",
".git/objects/42/ba2b873db0b15f5f19095a7220a3bf37b651e7": "4260208f1d72a6f56890dc3e8c68f621",
".git/objects/43/0691305f74aacf4e7228b451003a42e501760a": "3fade9c4ea12b4c8713743696eabd728",
".git/objects/47/90cd3fbdb8c2dae94eae47be0cff1978dd2363": "0cfb12fa06ce0747a12a78872cf8c949",
".git/objects/4a/b53a8556deb439a2564d843da85539c97f2a83": "0309ed6764977f5b6479456f67918cd4",
".git/objects/5c/3ae618cb5bd7497bac1437bf518b9e8cce0eec": "3a835018fde8536b624aa443f8867fcc",
".git/objects/5e/8062202aae725f9bbde888b5fcf58d4c887ab0": "fc5167c99bb38552084b2b3ebd191e1b",
".git/objects/62/9b330bbf39a2242f178d7c482722376e22583b": "211d0b3c548f3fc4506720df15297a00",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/66/f1a0864a00dcf59501deab1361e4ba79660f64": "f60c9e0c3938215f92d919e87a101692",
".git/objects/6e/7ad38ada871ba298bfc196b7aef63dcde9ecde": "fa9287fe9725819ca302f95cb2e119e0",
".git/objects/6e/a50dc9b6c65ac9437120b1b1fd78f2a44d11b2": "9f1114bc7748df7f0796b95f27563f75",
".git/objects/6f/ce5215bd833e073ebc550492160b5cd8f506a7": "33fd324cf7f6c3a6862d2e61d839a50d",
".git/objects/76/420af4ccb6e9a764a2f23ee5425b67d9a4561e": "aac3019e6c63b00d6ae218cecec466d8",
".git/objects/77/e14afa5d73cdda99c1da2a469d87c2441cca53": "91a8eb88f073bdbd4a3465183d630f58",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/225172c6239573bf2f6aea5a88ce6b240d3a19": "5ff43bb540e85004ac806bc21e032237",
".git/objects/82/c1443bc1d9e76bb494f43f1f7c9dedebfd2c4a": "8a27bce745e426a3e63fa8cc5c932439",
".git/objects/8e/138e74a547320463a35e7fc0170510c2004e17": "e62aad8ce0edffb905e2bac1b91fd7a6",
".git/objects/92/218e1d5792af9cac627c5a2603e0af208805c9": "4dc6543f272e0721526aefd1d7909064",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/96/99ac590c7fe8f753602c4ca304067b4b7abdc5": "5454886f9f4c1ce5c22cc1d1a6103b7f",
".git/objects/9c/be4a2dd49b8a0922fc1a3875efce2ad8a32410": "dddb3a7f2ed1040015b8cde91fb43378",
".git/objects/9d/748b9d621af9dbb174225446f3c63803a5b2f5": "1e8a1836146920aab9d29d0db2fd770b",
".git/objects/9f/9e1f6340d73c14529eea9ccf241c06a1e4e4d3": "b000ceeb6d3fb013fde52c3d35e27f4a",
".git/objects/a1/3239370488031036bb9bf98fcced831d12279b": "a9bf2633a7046ba341158a0cb13db1b5",
".git/objects/a4/39bda322a8da63364f68894ca21caafaca8e37": "d29435e0b266b1a183c6076c78bea414",
".git/objects/a9/d4a6e51fa4b21434bf3b41a6c1f48b8e9e2561": "ebff68fdf2ce7364e390983e637eff05",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ab/b20370d64d2137da79d472f5c2285cd32ffa63": "cae4706c213c7f615d3e361838884042",
".git/objects/ac/5fb54236f2964f33e0d6565f1c490072f457d4": "f95c27c848b2c2d981d7067360ccd8b7",
".git/objects/ae/021b4f2a11758fa195be5a37d48b76c122d275": "0eecf128e09aeca4d965eddc596bbb19",
".git/objects/be/c62b880215e90b7397d0176c19c17a8b2c64c8": "2a69901e2f58d003a597e69b839eee49",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d2/45ac532acf6a15f95264f01e11a7aa625fd8f7": "986260fcdc1881cb4ec98f521cfa1e0e",
".git/objects/d9/cfe2d2c427cce2de9e07c9bf426dbb3ba11a14": "40549c6101100f30fe27c46f475a1546",
".git/objects/db/0e70d5d42d5a4e9df0db6491f647b3f33bea76": "e53914d68aa8f045cd98a5c437ca03d5",
".git/objects/db/6d5cd1c90e64e4674a3af4921eea96cc206804": "15195311b30d2e056a43a94e6452cf8c",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/d9f51ca4478149bc46c959dd4b995e561a56b2": "a184eded71d33a059122865436d1fe6d",
".git/objects/df/0f827c517ee7327a9ad5800ed1aefb2fcbcd70": "67423f51e71bfe896f3b33b17128817a",
".git/objects/e0/0150064e1a39e3158a53581fe4cfe643c645c9": "b38a93994632794d6ba00393d9bc61b3",
".git/objects/e3/fa44ead2515b609f824fe5406961c8ad5f6afa": "b94c33aa696cbf375d02bc796bfdce64",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/ec/920d78d0a8f12526982343ed943f62dc325b2e": "f1ac0b80e65cda27c4a13fc4658a886b",
".git/objects/ed/2282fb5418ddb5416566b45a86d89717183848": "9676c900716d9f1f5a05ddde54bef7e6",
".git/objects/f2/bfc67163a098adf9e7df7af43b7069611e018c": "98a8a9742d0bc62942a9a0e532a8f3e0",
".git/objects/f3/50fb88f4deac06b7ca4df44b12ebc103cb404b": "35e188c94afefe2b96b32cf8fe969a6b",
".git/objects/f8/681435efa8f3baca7a70de7df0834c4063153f": "f03e69c2b64ae8f4893cb9c0219564e5",
".git/objects/fa/1b5c0a87c477622f2e1bafdf6468edc6c598a2": "ddd8bb167b8b17137556d2da10f9fcc2",
".git/objects/fb/3512c3c2f99d9210e97b813853eef70377b5e3": "8f194004d05f5ece56155cc777218521",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/pack/pack-14a89e7cb23bd0f0c8e316338864795c0e5b5f9a.idx": "5625383fc64f4773042168c5a7dfad63",
".git/objects/pack/pack-14a89e7cb23bd0f0c8e316338864795c0e5b5f9a.pack": "44b965f1647324db96cb8fa601db8bab",
".git/ORIG_HEAD": "616f501e0c0b0be5afde7c3477a04d06",
".git/refs/heads/master": "710503d8176ada60ae32cd8072794a70",
".git/refs/remotes/origin/master": "710503d8176ada60ae32cd8072794a70",
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
"assets/NOTICES": "d1f73e1f4b40829b50e0dbfad7d2d567",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.jpg": "4878d79c392e782fc46cfbb16687c398",
"icons/apple-icon-57x57.jpg": "4878d79c392e782fc46cfbb16687c398",
"index.html": "2448ec9172f3b286ce50844f0e9f92a1",
"/": "2448ec9172f3b286ce50844f0e9f92a1",
"main.dart.js": "1cc75aae01d3fe933052fd9404967a34",
"manifest.json": "7166daff1ce93045ce6b58396c066caf",
"README.md": "1311d936a92a330f9aff29845667e041"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
