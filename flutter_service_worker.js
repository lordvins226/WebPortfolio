'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "148735df33110b7831dafe8a6c500f33",
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
".git/index": "6946599ebc3e9a6344926ab85d876d1b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9610173a5e035d8c1574713b64ec2c4",
".git/logs/refs/heads/master": "e9610173a5e035d8c1574713b64ec2c4",
".git/logs/refs/remotes/origin/master": "dabdefe654817e424feb522514640be8",
".git/objects/01/6c75496a949ec6a6937440e322f6562876494a": "e6391a85cbc9382cfde96ed4c78a6c76",
".git/objects/01/82951f41aaa2921f923a2897faef9618b3e3e0": "c3dedb8ae0a320628ee16e138a525772",
".git/objects/04/c862f646318eab41c91758b95e43f6a4630ab0": "607e6e28245ee057f0576fcc8a8ba80c",
".git/objects/04/e4f4a54d63c696feb4fc5d0ed11a4482258c2e": "8b1a99d55006af7cbc4a82453418930c",
".git/objects/0d/7220a34bf605ee220044ca9fd151f390fc400b": "808f29d3aec4b7fc9380e4b5f65d7f43",
".git/objects/0e/0a96828f33ac436b49017cfecbd1629a9c524e": "e730d4a9448030eb0b52f8ec59410d61",
".git/objects/0e/12234a1e159bf6882a1d2b0d751abfa47dd091": "ed67512a438f5e1884abf019c7440366",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/10/c2f34165c1eb7f4f7b380a83542821cc816aa2": "0bb43e6dcc313b7a8a4f9da453a65aa7",
".git/objects/12/cad46a22843910c1989bf25533ed6a1fb5b1e7": "d5374d63dca260b88bfa0df6459ec932",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/8a885a50fc530073d8766ed1af6bb690c583f1": "232e2c6ab48aa23898c328cd368a4c83",
".git/objects/19/7b30bd756ecfc0f2788cc9e1348899b1fc4f3a": "a9b6e6d92b3bdf5df4c6086e2d1759ec",
".git/objects/1c/ed987dc6c7e1adb31b01d69d1f5e51f4773fb8": "f76ef1534c58c0ee109691e880d99ec7",
".git/objects/1e/4e0e4ed0a651c216309e52f5d2b5910a0c02df": "af52abbb5b8323392b993e4fc6b1bb7f",
".git/objects/21/1b3cab0aa48d3bcda04077d29ba3d26dd0aad4": "2cab9162b12530abbc310def1280bbea",
".git/objects/24/1390fcc06240a3110c96eb52377b0fe4e59af3": "a49ca876b265ed1ddba49c184f5b6aa1",
".git/objects/24/3034a7bd122c7109578d7ab224815ba15f823a": "0d10bed3c5ba251c6bad0ae82d7c53ec",
".git/objects/25/b25a3fb5f30052613b59720b79135abd4d06e6": "c5b316ab1204683ae9464a0b1c833557",
".git/objects/27/bb3571e0a98dd3e3c58bd2ab1c5bc6e3057ada": "a94f56e6c3b08b4d0104a9078be44cdb",
".git/objects/28/2c5f339e1f3443d626710c0e61c880776b4966": "088a1a6c102f1788bbe3c2a6c76cf301",
".git/objects/29/4525df4eeed1928009f6e89c5cfe0ca58ddf12": "9d338bd4f9062d2a9f06bc5cd4383b32",
".git/objects/2a/ad0bb65cb553ecd6ce64af7bc006ad8d07b15c": "b66f6255c661f37aff4db0237856142d",
".git/objects/2d/d139b60c1b2d8feb09b902f000817dcfce5417": "702787a210b1e4c143da6429ccf2093a",
".git/objects/31/147c50f055ad6ee63c6b579c3f537c314dc3f1": "89b7e7f440fc2b3bedb5a6cc38c12718",
".git/objects/33/3ec666f17333b4a37a338eb0dcee059119249e": "ef1c674d414606c2c1ad020a94199211",
".git/objects/33/b3618747fc959e78f77c7c647cc7d8352e65fd": "8415656d482b9cc89edf0de2a1bc97f0",
".git/objects/39/dcbce88c161dda666daacf129f9260a6028e92": "f549bfa8641d96b7c163e968871f2da6",
".git/objects/3c/3d551075c0f15ad514b0e6ee4aeec3cb7a9e71": "50810e2b540dd44d0e6b1972c07325a3",
".git/objects/44/e91d1d81c4ceecc6635f4400308525996bbe84": "83abb056bb6f076eb428448fb80505a4",
".git/objects/45/3f3a5f05cd28aa725ab80247456256d9692d2e": "e9828e2006510fb1f4e8b302862752d4",
".git/objects/47/49762e54683af7187938493ad755ad7c8aac5b": "b9aa9883cb03a1fd00ed0ac9d7d4067e",
".git/objects/4c/292224b7f51f78f0e35770d758c5ff8451df4e": "ac0b92cfd5cd40e148caccda5ef059d1",
".git/objects/4c/97945c887f2999feef65847c0270ed912b9aea": "57e2d524709cc40e14e66a22a884964f",
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
".git/objects/89/b9c8b1a77ea4a1847a4223057a1afecc00ccef": "47f737fa229e4161a6ed4c6d14fe0791",
".git/objects/8b/795403945f204720f059fd000a6bc111ec600d": "ec491fe92bba1f87f750a7776b927bfd",
".git/objects/8c/71ba10b5a3de5a6d6db2137d0e262a5ad8f5a4": "8f3e07b093160d5d5131cb944173662c",
".git/objects/8e/138e74a547320463a35e7fc0170510c2004e17": "e62aad8ce0edffb905e2bac1b91fd7a6",
".git/objects/8e/447731a5bcb03c1e712e807b30ab2137be18d6": "f87b6faaa3c23de4b5382649b797a48e",
".git/objects/8e/6913ab75a6260433c35c4395a2138eb51a2ca0": "d9e70fb2a9f8445f3caa2a71376a6e16",
".git/objects/8f/19600c019fa9daadeb27717cd7efe3cbd03a39": "8f3c5496b4f308703ead0c5cf41c73bc",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/78e41bbb89880cf47d1f018193d4c2bc247276": "3aaa14150e50793b5787e0f68b8863b2",
".git/objects/98/84c8d0c67b67e2bb8cbb0f7b5c83d174bdd3e1": "f2731a216cd3760bb73ebf41fa5678cb",
".git/objects/9d/4a487efcad37f2602e192ea364d263e19d7650": "f9fe84e2aea6e7c3bcca04a3427dadc8",
".git/objects/9e/e94c9f805a8ad72e3164049860804aecf8ebb1": "19adb78a8a50cd91f9827ef1be3df3a8",
".git/objects/9f/e08aa17815718264b35a24f17ec20b12ed79a7": "f5f16213b23de279bf00af577fdd5d05",
".git/objects/a1/7a13aa49fdcff4d26ab75548a5719fc8cf8176": "aa9422fa40edfa5536a62eb06ab50f11",
".git/objects/a3/3539e0b37cc7d718e84729c98cab69a5d13aee": "eae3304e0f985f9b576ee2b643ed343f",
".git/objects/a4/9d864f7c88fc53569ec2f50ba1235de5e90845": "3b7555e0c1ceadbcc101565f9aa67c94",
".git/objects/a9/b769a04b2561e69504e924ad19595a1a4eda2e": "bc51247adc74579fe0756dbd974dd4de",
".git/objects/aa/828bb98c1df1f7f608607cde9c9e6037e08070": "6ca3b345fc9e92df4e7a3e2bee525aea",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ad/af57aa20406ce6099006eda6645432356f6c42": "b8154cf391ed79bdf016d1c75c3e9820",
".git/objects/af/c47c9e83b14d582685f9b3c6595707bc62fcd8": "c0244fd73441dc7c733a31153677ff0e",
".git/objects/af/d1d1ff012926090bc3c99433340e62cb8d521e": "ce43936aa1ccba9a6bd5a6b43ad4b21f",
".git/objects/b6/15fde4d3f7fa3f92fc0b6f5826e4b0977bdacd": "e756d8fff49c5b4f935dab326b7f4a2d",
".git/objects/b9/539484451c1f20dd3c590ffe96cc09c4b61d1b": "cee275a9cc4edb072cf94d52c0af9fff",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/bf/a21d203e0e8a9701b2d8081e22acea3708416c": "a629c6c0dbf3c5c596b95c59260fb6e6",
".git/objects/c4/209fd6efac4b042a53ac025063ce5ff822efeb": "fe0b077b1a2195455915b1c7a7cf07d5",
".git/objects/c8/2d0f3af4b7b099b0592dca0b2a59b186ad5dc1": "9db83a07b3bdffe66ce2230adb9bcc82",
".git/objects/c9/fa4548f437ca9d9ae1d86eca20f653c2ce74c1": "231887e0e270e613fb4b815893b652c1",
".git/objects/cf/a687fceba4aa6554d00321e1b421aaa876ffd9": "b3c68c037c54475731830300ff3faac4",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d2/ca9da56977087684cd3f23edff3611e649ccbe": "d3542b35f0baff8ceee3e55657c7e352",
".git/objects/d5/63f329dace734b2d584a5d70a060ae0bf72db5": "add5f75d1f8130fa2987210a7508df0e",
".git/objects/d8/b7c4870a238ee7013c6b9bb42f248f75600668": "95496d9c0ad398514663369cec903cfe",
".git/objects/da/c40c9442165821a9fa72181c2f9c274ca65b70": "045eeb112b5db24a7e1ae912f9f556b4",
".git/objects/db/0e70d5d42d5a4e9df0db6491f647b3f33bea76": "e53914d68aa8f045cd98a5c437ca03d5",
".git/objects/dc/77bc47c5c37946b8041f42521419bcae4dd755": "1cabb8b89ca0535694ebf5675ff1a189",
".git/objects/dc/c2f4bda5d0a1bbab4d75b80cecbe9d7279bcef": "c867e981fa0acc437a32c37e65dbf927",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/80596768689b3ebae1db6021012ced28b3615b": "c16bbd04d2e15f814bf238d0e13e4252",
".git/objects/de/cbb9b13e95bcadcc404f858a361704789ff013": "c9f97591fc153586ab54ab2ac670ace1",
".git/objects/df/8d09eb34395fc5167e8c71e05457687e27081c": "7693c3930b9afb6e59096c4e438c0dc7",
".git/objects/e7/8f747619f7ddb25e7d3e36f08eb9f35d6b26b2": "e7419adb9cad3675a69e391336fe121e",
".git/objects/e9/dc53eadbd20d82ee8c4990ae912c1e3662c514": "7d3d3f8294e743015726711ff66a8496",
".git/objects/ea/8249a34de3fab48e74569f6ffe49da7f318e68": "6b656a257b9adbccb95da8f367122176",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/ec/6aa81f1a223a5b2f5fcd76a21f4d440f35fe2d": "a513dc55945d844c4f4f15f573f6b725",
".git/objects/ed/179e66ec5f59b1c5b6a5624996bcc641c31057": "c9a1b871babe51f447e88ce65235565d",
".git/objects/ee/d1671245e83b3518670066769a59054243549c": "80fff6b7f86d652342226299382142e7",
".git/objects/ef/8a2a6f37314832c950359ce026b8777c65be4a": "2ef188dd105a1aec974148bb6d6b394b",
".git/objects/f0/46e134c349044be4005076a617f2c0e697ef5c": "3e2e0f9cae5bf45bfe228de81bd6533d",
".git/objects/f1/01fcc6ce687c78e57d05b5fdd6d594442df734": "4f8843cd4ac32b805ec731e68bd31e6b",
".git/objects/f3/e45c60cf13720eb0813fbf9804b34b4ebebcd6": "2e142bdb4a18389f6c2f7fa5d224a295",
".git/objects/f5/e3d00185c68e735f12b67992d18320721f5474": "56f61486664448e1cfce0f3534e487a0",
".git/objects/fa/e2a1ff02a72d41e6490662418ec9195974f0e8": "33f9bb947db28eec284a59abd5b3ae0b",
".git/objects/fb/3512c3c2f99d9210e97b813853eef70377b5e3": "8f194004d05f5ece56155cc777218521",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "fcfcfe362101e4c0c7fae01c31410605",
".git/refs/heads/master": "0afe4b617efdb620096c6f1296c05789",
".git/refs/remotes/origin/master": "0afe4b617efdb620096c6f1296c05789",
"assets/AssetManifest.json": "07d94702ee9345cbde081a26ebf63c75",
"assets/assets/avatar.jpg": "53391941ad83cf128582fec112a1da55",
"assets/assets/Discord-Logo-Color.png": "2c21aeda16de354ba5334551a883b481",
"assets/assets/favicon.png": "c07f385fb4d5c2157c197ca7bdd49604",
"assets/assets/FontManifest.json": "4b859210b1cb7cc0af63babc29eac841",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/kevin_logo.jpg": "4878d79c392e782fc46cfbb16687c398",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "1c295be01113360ef2423cf611343840",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "c07f385fb4d5c2157c197ca7bdd49604",
"icons/apple-icon-57x57.png": "11b5f087b45fde2b6b57a94d96cbf388",
"index.html": "b48123791ab76d1e4de1ed96a32ed9b7",
"/": "b48123791ab76d1e4de1ed96a32ed9b7",
"main.dart.js": "a1899889692e5a298224b82652222e8e",
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
