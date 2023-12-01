import * as universal from '../entries/pages/posts/_id_/_page.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/9.80b10219.js","_app/immutable/chunks/post.c4982310.js","_app/immutable/chunks/firebase.ac311c24.js","_app/immutable/chunks/runtime.68e8ff19.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/store.340bdf00.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/history.686f2e10.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.5a8ec747.js","_app/immutable/chunks/store_.58084927.js","_app/immutable/chunks/NoPosts.c610ae62.js","_app/immutable/chunks/LoadingSpinner.69a90c28.js","_app/immutable/chunks/stores.0927624d.js","_app/immutable/chunks/singletons.597effc6.js"];
export const stylesheets = ["_app/immutable/assets/9.d50c65f9.css"];
export const fonts = [];
