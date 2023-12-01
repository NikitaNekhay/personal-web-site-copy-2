import * as universal from '../entries/pages/posts/_id_/_page.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/9.d9b85228.js","_app/immutable/chunks/post.e693ec3c.js","_app/immutable/chunks/firebase.d82ae59d.js","_app/immutable/chunks/runtime.esm.133179ec.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/store.dbefa99f.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/history.686f2e10.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.8c9022c7.js","_app/immutable/chunks/store_.1f7b5d87.js","_app/immutable/chunks/NoPosts.1e5929cc.js","_app/immutable/chunks/LoadingSpinner.69a90c28.js","_app/immutable/chunks/stores.08977c45.js","_app/immutable/chunks/singletons.00fa9b3f.js"];
export const stylesheets = ["_app/immutable/assets/9.d50c65f9.css"];
export const fonts = [];
