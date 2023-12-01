

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/works/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.f50c1cd8.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/paths.f0eebbc9.js","_app/immutable/chunks/runtime.esm.133179ec.js","_app/immutable/chunks/index.52e2593e.js"];
export const stylesheets = [];
export const fonts = [];
