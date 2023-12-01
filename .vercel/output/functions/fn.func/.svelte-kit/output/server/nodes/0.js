import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.402c0130.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/paths.5a8ec747.js","_app/immutable/chunks/store.340bdf00.js","_app/immutable/chunks/firebase.ac311c24.js","_app/immutable/chunks/runtime.68e8ff19.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/clickOutside.338be74c.js","_app/immutable/chunks/en.b9cc4ada.js","_app/immutable/chunks/store_.58084927.js","_app/immutable/chunks/stores.0927624d.js","_app/immutable/chunks/singletons.597effc6.js"];
export const stylesheets = ["_app/immutable/assets/0.ca3bc879.css"];
export const fonts = [];
