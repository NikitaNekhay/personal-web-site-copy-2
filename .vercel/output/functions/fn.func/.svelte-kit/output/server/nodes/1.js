

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.93207239.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/stores.a9c26b8e.js","_app/immutable/chunks/singletons.76e4baf7.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/paths.8357d7d2.js"];
export const stylesheets = [];
export const fonts = [];
