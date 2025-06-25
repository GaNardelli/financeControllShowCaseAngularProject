
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/financeControllShowCaseAngularProject/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZGEF4ETR.js",
      "chunk-OFYZ6HBG.js"
    ],
    "route": "/financeControllShowCaseAngularProject"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MGZX7257.js",
      "chunk-DESAH7ZI.js",
      "chunk-GJOFJJJO.js"
    ],
    "route": "/financeControllShowCaseAngularProject/expenses"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IKFSSUDJ.js",
      "chunk-DESAH7ZI.js",
      "chunk-GJOFJJJO.js"
    ],
    "route": "/financeControllShowCaseAngularProject/incomes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U2CD3KVV.js",
      "chunk-GJOFJJJO.js"
    ],
    "route": "/financeControllShowCaseAngularProject/users"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 30659, hash: 'b6312b0d179ae370326c5f9848a5463efae06277d1da4ff3c468217e84c41ddd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19506, hash: 'e4aed1c62e30656e1f664442e4f3f3c179b02848ad3ff8815403a61fc8bffeaa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 67190, hash: 'ae2b6aa6229d6e3f2c162f924ccfe742dd17dae1039e5de5ee64cf28e0c09701', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 108363, hash: 'e1397b7696b22a1c29b1e39af935e99504347438c40770dfb37e11a04e3a5736', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 120828, hash: '21da00df4eff7dbe9bc6a3244e914e0abdd80f5da3a013ddde4dbff6489c15b6', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'incomes/index.html': {size: 104866, hash: 'fbcc0a81d6de654fcb4006ff604e56126304d58aabbf4b70ee1124259333a389', text: () => import('./assets-chunks/incomes_index_html.mjs').then(m => m.default)},
    'styles-AMFCMV4I.css': {size: 233986, hash: 's0kJQ+sBlKQ', text: () => import('./assets-chunks/styles-AMFCMV4I_css.mjs').then(m => m.default)}
  },
};
