
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/financeControllShowCaseAngularProject/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNQC3BIL.js",
      "chunk-OFYZ6HBG.js"
    ],
    "route": "/financeControllShowCaseAngularProject"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RZ7J273R.js",
      "chunk-JXQE6NJP.js",
      "chunk-BPMEI7BH.js"
    ],
    "route": "/financeControllShowCaseAngularProject/expenses"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6TGAAVJR.js",
      "chunk-JXQE6NJP.js",
      "chunk-BPMEI7BH.js"
    ],
    "route": "/financeControllShowCaseAngularProject/incomes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JS2YGQVI.js",
      "chunk-BPMEI7BH.js"
    ],
    "route": "/financeControllShowCaseAngularProject/users"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 30659, hash: '275518d65828034306679af568aa5fc3810d18c7b2489d1822d1d234ece03b0b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19506, hash: 'f1c178538897c6fad2c1ef471865d221bc35f9d07213cdc53945b8fde7f64769', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 67190, hash: '2771cda10fdd291c42764337a9b30d47d86dce688fbd8eb65d1a4f1f84599489', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'incomes/index.html': {size: 104866, hash: '4a9dcfba2ebf69212ff7166718dfc0952398f72b4d9e4912323c0d64cd063f5d', text: () => import('./assets-chunks/incomes_index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 108363, hash: '996874055b29c51b8b74f8d641674512500e3a28693da8e0fc4a9a96b1dfbee8', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 120828, hash: 'fbd79d83cca61097a6d81970615a2ec8e4f82c32ff5348a751189a13d6c9a30e', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'styles-AMFCMV4I.css': {size: 233986, hash: 's0kJQ+sBlKQ', text: () => import('./assets-chunks/styles-AMFCMV4I_css.mjs').then(m => m.default)}
  },
};
