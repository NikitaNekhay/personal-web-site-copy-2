

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.464dabcd.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/runtime.esm.133179ec.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/user.262aa4c9.js","_app/immutable/chunks/firebase.d82ae59d.js","_app/immutable/chunks/paths.8c9022c7.js","_app/immutable/chunks/LoadingSpinner.69a90c28.js"];
export const stylesheets = [];
export const fonts = [];
