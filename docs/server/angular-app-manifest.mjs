
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/test/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/test"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 526, hash: '015e093fd27749688f3307c38d0f41b53bc62e20213bd5e2ce532f06fe3e10ca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1039, hash: '62b10cc1e72b7f36352176c91d86d9d66fa167cf0966cc3b1fc4d9e1e67b9ea7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20849, hash: '682d5acd580100b3d2d46f2dcb144450901c00117c3753b4c7ed062cd647c945', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
