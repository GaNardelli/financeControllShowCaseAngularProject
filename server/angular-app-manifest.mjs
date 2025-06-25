
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
    'index.csr.html': {size: 30659, hash: 'f8f008c8e18e282cb92fe01efc0f9c8bda14b69aca8fd2c95fe7e3334cf69779', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19506, hash: 'd762466992b89cfde7681c984fbd7dcd086e5dec1059bfa0affe202fd81c6173', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'incomes/index.html': {size: 104866, hash: '6293f00c77fc07786ff9735efefef10c5667560d875a6f75c5335b0319a7c21b', text: () => import('./assets-chunks/incomes_index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 108363, hash: '1460bb934a5f8b5497cd0795786506b1f0b26725755d41f9adf13d8f7336fee5', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 120828, hash: 'ab14298dc2bdfaab4e30a1bca1042f1c7ff2f997df7cb53261a8371f7a202c18', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'index.html': {size: 67190, hash: 'c8c7f0189be49a653b9aeae962424954ffb4ef078551043579626bac0237c303', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AMFCMV4I.css': {size: 233986, hash: 's0kJQ+sBlKQ', text: () => import('./assets-chunks/styles-AMFCMV4I_css.mjs').then(m => m.default)}
  },
};
