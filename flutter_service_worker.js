'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a900fe75f26b5f5490fc1fa1bb2ba6c2",
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
".git/index": "8949d3358528f6eb58841b7118c2d320",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f4ca5791b3607ade7c4c9705a84a5c5",
".git/logs/refs/heads/master": "2f4ca5791b3607ade7c4c9705a84a5c5",
".git/logs/refs/remotes/origin/master": "1d169622c9ea9d31734c15b1bb229d34",
".git/objects/01/6c75496a949ec6a6937440e322f6562876494a": "e6391a85cbc9382cfde96ed4c78a6c76",
".git/objects/01/82951f41aaa2921f923a2897faef9618b3e3e0": "c3dedb8ae0a320628ee16e138a525772",
".git/objects/04/c862f646318eab41c91758b95e43f6a4630ab0": "607e6e28245ee057f0576fcc8a8ba80c",
".git/objects/04/e4f4a54d63c696feb4fc5d0ed11a4482258c2e": "8b1a99d55006af7cbc4a82453418930c",
".git/objects/0e/0a96828f33ac436b49017cfecbd1629a9c524e": "e730d4a9448030eb0b52f8ec59410d61",
".git/objects/0e/12234a1e159bf6882a1d2b0d751abfa47dd091": "ed67512a438f5e1884abf019c7440366",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/8a885a50fc530073d8766ed1af6bb690c583f1": "232e2c6ab48aa23898c328cd368a4c83",
".git/objects/19/7b30bd756ecfc0f2788cc9e1348899b1fc4f3a": "a9b6e6d92b3bdf5df4c6086e2d1759ec",
".git/objects/1e/4e0e4ed0a651c216309e52f5d2b5910a0c02df": "af52abbb5b8323392b993e4fc6b1bb7f",
".git/objects/21/1b3cab0aa48d3bcda04077d29ba3d26dd0aad4": "2cab9162b12530abbc310def1280bbea",
".git/objects/24/3034a7bd122c7109578d7ab224815ba15f823a": "0d10bed3c5ba251c6bad0ae82d7c53ec",
".git/objects/29/4525df4eeed1928009f6e89c5cfe0ca58ddf12": "9d338bd4f9062d2a9f06bc5cd4383b32",
".git/objects/2a/ad0bb65cb553ecd6ce64af7bc006ad8d07b15c": "b66f6255c661f37aff4db0237856142d",
".git/objects/33/3ec666f17333b4a37a338eb0dcee059119249e": "ef1c674d414606c2c1ad020a94199211",
".git/objects/39/dcbce88c161dda666daacf129f9260a6028e92": "f549bfa8641d96b7c163e968871f2da6",
".git/objects/3c/3d551075c0f15ad514b0e6ee4aeec3cb7a9e71": "50810e2b540dd44d0e6b1972c07325a3",
".git/objects/44/e91d1d81c4ceecc6635f4400308525996bbe84": "83abb056bb6f076eb428448fb80505a4",
".git/objects/45/3f3a5f05cd28aa725ab80247456256d9692d2e": "e9828e2006510fb1f4e8b302862752d4",
".git/objects/4c/292224b7f51f78f0e35770d758c5ff8451df4e": "ac0b92cfd5cd40e148caccda5ef059d1",
".git/objects/4f/b473c119a69fe40a557a25e03bbf6b8b913b05": "a446bbe7c4a4d3da83c53ff7b87dc6fd",
".git/objects/55/874a472ce1cb2c076a253f65a1ed1cab81e13e": "291bcd6e7cd7c4d30c582a8b66265b93",
".git/objects/56/9179f22e791d5ac99a633c5fcf38de5f208a2e": "07d2b102e6adc702d4635444cb708c8c",
".git/objects/5a/fa92f47eb44e34acbee6b2c02e6dd4dbeb0a92": "bba1d912c7869ebed1ce3f9760784d24",
".git/objects/5b/ff9fef2fde2ac08b3bb71a570a38b2cda96364": "c00c61058c119d65a20fb451efbf7ade",
".git/objects/62/6ea6105ae230801da21f5a1881a0a2e9e5642e": "4dff941d33913ac78cbf38111609d213",
".git/objects/65/0dad3e1c94c8a99d4903e2311337aabf636f9c": "c25a0540901988465832f945f5ade509",
".git/objects/65/68543887d49287592703df2975c8660dba3361": "b44a5ffefb7b1e2e1f8f6aa5bf5c48fa",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/65/cd9a340375e475807c16fa8a04cd05eb7b4274": "77dad0ef47ca548f55c3ab884ffba46f",
".git/objects/6a/493fabd0b39d4dcee847c25398ebf499a0743a": "2af20a3e71cc6c623487678914b33f86",
".git/objects/6b/1e61a7f30331a0da5f33c5771d370dbb673049": "2e6df10969d633d58f8292bd15f49e58",
".git/objects/74/12de3ccb1b6997305d45f81be0479e577918c1": "15ecae154c387dc0f0d8e15d92f8bbe2",
".git/objects/74/3f9f6d7360ca496f1995759c0c58ad1b36f47a": "524c66f6ea24670c2351477df95c19d6",
".git/objects/74/865b894e7d91a74d36638d6efe51932db06f4b": "05adc4b259938cb14a04180ebe1f202b",
".git/objects/77/a2f517f91b7ba939bb3193cedfacb621d7d95d": "8b4d521d95b70a26016ae7c7d75f787d",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/1750d17c4644c2dc33016e5fa889bbce66e984": "7e5b0f4ff57cc03aa2b7cf08b4c78126",
".git/objects/82/3872774d80af4d4dc1253dbe7b23b0ff559075": "80e42abfa5ed79c9e56ddd7111dd03c2",
".git/objects/8c/71ba10b5a3de5a6d6db2137d0e262a5ad8f5a4": "8f3e07b093160d5d5131cb944173662c",
".git/objects/8e/138e74a547320463a35e7fc0170510c2004e17": "e62aad8ce0edffb905e2bac1b91fd7a6",
".git/objects/8e/6913ab75a6260433c35c4395a2138eb51a2ca0": "d9e70fb2a9f8445f3caa2a71376a6e16",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/78e41bbb89880cf47d1f018193d4c2bc247276": "3aaa14150e50793b5787e0f68b8863b2",
".git/objects/9f/e08aa17815718264b35a24f17ec20b12ed79a7": "f5f16213b23de279bf00af577fdd5d05",
".git/objects/a1/7a13aa49fdcff4d26ab75548a5719fc8cf8176": "aa9422fa40edfa5536a62eb06ab50f11",
".git/objects/a3/3539e0b37cc7d718e84729c98cab69a5d13aee": "eae3304e0f985f9b576ee2b643ed343f",
".git/objects/a9/b769a04b2561e69504e924ad19595a1a4eda2e": "bc51247adc74579fe0756dbd974dd4de",
".git/objects/aa/828bb98c1df1f7f608607cde9c9e6037e08070": "6ca3b345fc9e92df4e7a3e2bee525aea",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/bf/a21d203e0e8a9701b2d8081e22acea3708416c": "a629c6c0dbf3c5c596b95c59260fb6e6",
".git/objects/c4/209fd6efac4b042a53ac025063ce5ff822efeb": "fe0b077b1a2195455915b1c7a7cf07d5",
".git/objects/c8/2d0f3af4b7b099b0592dca0b2a59b186ad5dc1": "9db83a07b3bdffe66ce2230adb9bcc82",
".git/objects/c9/fa4548f437ca9d9ae1d86eca20f653c2ce74c1": "231887e0e270e613fb4b815893b652c1",
".git/objects/cf/a687fceba4aa6554d00321e1b421aaa876ffd9": "b3c68c037c54475731830300ff3faac4",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d5/63f329dace734b2d584a5d70a060ae0bf72db5": "add5f75d1f8130fa2987210a7508df0e",
".git/objects/d8/b7c4870a238ee7013c6b9bb42f248f75600668": "95496d9c0ad398514663369cec903cfe",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e9/dc53eadbd20d82ee8c4990ae912c1e3662c514": "7d3d3f8294e743015726711ff66a8496",
".git/objects/ea/8249a34de3fab48e74569f6ffe49da7f318e68": "6b656a257b9adbccb95da8f367122176",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/ec/6aa81f1a223a5b2f5fcd76a21f4d440f35fe2d": "a513dc55945d844c4f4f15f573f6b725",
".git/objects/ed/179e66ec5f59b1c5b6a5624996bcc641c31057": "c9a1b871babe51f447e88ce65235565d",
".git/objects/f0/46e134c349044be4005076a617f2c0e697ef5c": "3e2e0f9cae5bf45bfe228de81bd6533d",
".git/objects/fa/e2a1ff02a72d41e6490662418ec9195974f0e8": "33f9bb947db28eec284a59abd5b3ae0b",
".git/objects/fb/3512c3c2f99d9210e97b813853eef70377b5e3": "8f194004d05f5ece56155cc777218521",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "fcfcfe362101e4c0c7fae01c31410605",
".git/refs/heads/master": "f3c0c3f1f9d7e5428921b8971f627410",
".git/refs/remotes/origin/master": "f3c0c3f1f9d7e5428921b8971f627410",
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
"assets/LICENSE": "eb3824da03eb1108531d0e9846baeca3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "c0bc7610cb2c65ccfa683dd87aca572c",
"icons/apple-icon-57x57.png": "9e893cb02a10d68058f1d5cb80106d9e",
"index.html": "710fe213d0d4e2ae22a33ff4388dd07b",
"/": "710fe213d0d4e2ae22a33ff4388dd07b",
"main.dart.js": "03ea972793b072ccc797ff0cea5b43da",
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
