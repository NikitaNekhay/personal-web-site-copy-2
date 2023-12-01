

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.284b6f8c.js","_app/immutable/chunks/scheduler.b3080bb7.js","_app/immutable/chunks/index.46c9a90c.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/post.c4982310.js","_app/immutable/chunks/firebase.ac311c24.js","_app/immutable/chunks/runtime.68e8ff19.js","_app/immutable/chunks/index.52e2593e.js","_app/immutable/chunks/store.340bdf00.js","_app/immutable/chunks/paths.5a8ec747.js","_app/immutable/chunks/NoPosts.c610ae62.js","_app/immutable/chunks/LoadingSpinner.69a90c28.js"];
export const stylesheets = [];
export const fonts = [];
