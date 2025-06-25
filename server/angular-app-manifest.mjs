
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/financeControllShowCaseAngularProject/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/financeControllShowCaseAngularProject"
  },
  {
    "renderMode": 2,
    "route": "/financeControllShowCaseAngularProject/expenses"
  },
  {
    "renderMode": 2,
    "route": "/financeControllShowCaseAngularProject/incomes"
  },
  {
    "renderMode": 2,
    "route": "/financeControllShowCaseAngularProject/users"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 30506, hash: '8780879f294f490163c8347a4a6e40b7d1a48bdbdf0edca8995593d5b659880f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19353, hash: '9ffbd1baf5bf721e91f13eeed3bbfab1eb5cd060f24bd2bea4d40ee0255cd01d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'incomes/index.html': {size: 104556, hash: '4d95302105c5a30f56081513d5d2b05367eec88b5106d52b7c50e7b19df1471a', text: () => import('./assets-chunks/incomes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 66932, hash: '3c3e8d6338401e3bd9c02cde893835f39856cfbee28416d8a84dad8075c12fa7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 108105, hash: '90ce0232e7fa90461d4cb5554056b7d3c3e090f2355f5981ed641127ab135218', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 120518, hash: '633e1b14a4856d601fa405385804c68b6f9b9231146bec79572f05361b5f7dc5', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'styles-AMFCMV4I.css': {size: 233986, hash: 's0kJQ+sBlKQ', text: () => import('./assets-chunks/styles-AMFCMV4I_css.mjs').then(m => m.default)}
  },
};
