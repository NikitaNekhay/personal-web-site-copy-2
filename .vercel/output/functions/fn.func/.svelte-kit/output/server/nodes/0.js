import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.f7ce460e.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/paths.f0eebbc9.js","_app/immutable/chunks/store.dbefa99f.js","_app/immutable/chunks/firebase.d82ae59d.js","_app/immutable/chunks/runtime.esm.133179ec.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/clickOutside.338be74c.js","_app/immutable/chunks/en.b9cc4ada.js","_app/immutable/chunks/store_.1f7b5d87.js","_app/immutable/chunks/stores.8e7ca252.js","_app/immutable/chunks/singletons.ac414eaa.js"];
export const stylesheets = ["_app/immutable/assets/0.ca3bc879.css"];
export const fonts = [];
