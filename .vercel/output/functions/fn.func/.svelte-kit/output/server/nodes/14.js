

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/14.de56a67c.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js"];
export const stylesheets = [];
export const fonts = [];
