
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/financeControllShowCaseAngularProject/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6SWMD5TB.js",
      "chunk-OFYZ6HBG.js"
    ],
    "route": "/financeControllShowCaseAngularProject"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDHGTUUU.js",
      "chunk-DWJ5MIZO.js",
      "chunk-H6FFG37P.js"
    ],
    "route": "/financeControllShowCaseAngularProject/expenses"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KXZDRRYC.js",
      "chunk-DWJ5MIZO.js",
      "chunk-H6FFG37P.js"
    ],
    "route": "/financeControllShowCaseAngularProject/incomes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LIP6IYHM.js",
      "chunk-H6FFG37P.js"
    ],
    "route": "/financeControllShowCaseAngularProject/users"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 30659, hash: '04957058d4c0900b1550fb4b44a3022832257eb8445f94c80f07b5922193c0a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19506, hash: '67ebedd68874976ce0e6d05094f1ef7034da684dbb3de0d946faf9989534a13c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 67042, hash: '7e38e47532ecb7a00f9305d1ba48b6696fd6c0bc7aefceec3ca19f761402dd56', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 108215, hash: '99ba9a48b7b8d637a4de4f45eea4a2aa1a7e475b6997f7bebd5e9282501f42f2', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'incomes/index.html': {size: 104786, hash: '01294383d0624e1c26a492a6d3c391b001631d1f14476d10d5aeeb31e3f50334', text: () => import('./assets-chunks/incomes_index_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 120782, hash: '1b9f9d03a4d2ef941bc96d95c66d0ad82c9ea33fd159c4bc6382f0f9971d8b5d', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'styles-AMFCMV4I.css': {size: 233986, hash: 's0kJQ+sBlKQ', text: () => import('./assets-chunks/styles-AMFCMV4I_css.mjs').then(m => m.default)}
  },
};
