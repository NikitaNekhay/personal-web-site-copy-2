

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.a080b697.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/runtime.esm.133179ec.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/paths.8357d7d2.js"];
export const stylesheets = ["_app/immutable/assets/4.08a8b4c1.css"];
export const fonts = [];
