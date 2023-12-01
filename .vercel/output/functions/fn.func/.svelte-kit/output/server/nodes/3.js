

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f8334f02.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/runtime.68e8ff19.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/firebase.ac311c24.js"];
export const stylesheets = ["_app/immutable/assets/3.fa9d8a65.css"];
export const fonts = [];
