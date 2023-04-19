const manifest = {
	appDir: "_app",
	appPath: "your-repo-name/_app",
	assets: new Set([".nojekyll","favicon.ico","media/NIKITA.JPG","media/envelop.png","media/envelop.svg","media/flowers_september1.jpg","media/flowers_september1.png","media/instagram.png","media/instagram.svg","media/telegram.png","media/telegram.svg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".JPG":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.3be68616.js","imports":["_app/immutable/entry/start.3be68616.js","_app/immutable/chunks/index.e03ef04e.js","_app/immutable/chunks/singletons.8042373e.js","_app/immutable/chunks/paths.daf6fa0b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1ef3644b.js","imports":["_app/immutable/entry/app.1ef3644b.js","_app/immutable/chunks/index.e03ef04e.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-58193123.js'),
			() => import('./chunks/1-bd483797.js'),
			() => import('./chunks/2-11bd8fe1.js'),
			() => import('./chunks/3-bbb3043c.js'),
			() => import('./chunks/4-61e70947.js'),
			() => import('./chunks/5-c273ccf5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/diary",
				pattern: /^\/diary\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/your-repo-name/","/your-repo-name/about/","/your-repo-name/contact/","/your-repo-name/diary/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
