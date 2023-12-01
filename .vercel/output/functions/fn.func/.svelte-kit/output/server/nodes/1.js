

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9171e838.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/stores.8e7ca252.js","_app/immutable/chunks/singletons.ac414eaa.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/paths.f0eebbc9.js"];
export const stylesheets = [];
export const fonts = [];
