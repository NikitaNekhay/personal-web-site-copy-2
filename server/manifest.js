const manifest = {
	appDir: "_app",
	appPath: "personal-web-site-copy-2/_app",
	assets: new Set([".nojekyll","favicon.ico","media/NIKITA.JPG","media/envelop.png","media/envelop.svg","media/flowers_september1.jpg","media/flowers_september1.png","media/instagram.png","media/instagram.svg","media/telegram.png","media/telegram.svg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".JPG":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.3650ddf0.js","imports":["_app/immutable/entry/start.3650ddf0.js","_app/immutable/chunks/index.e03ef04e.js","_app/immutable/chunks/singletons.36d81ad5.js","_app/immutable/chunks/paths.8033dbbd.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.aa727780.js","imports":["_app/immutable/entry/app.aa727780.js","_app/immutable/chunks/index.e03ef04e.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-9f95afef.js'),
			() => import('./chunks/1-e04414d8.js'),
			() => import('./chunks/2-a037c1f4.js'),
			() => import('./chunks/3-bbb3043c.js'),
			() => import('./chunks/4-60a7f8a2.js'),
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

const prerendered = new Set(["/personal-web-site-copy-2/","/personal-web-site-copy-2/about/","/personal-web-site-copy-2/contact/","/personal-web-site-copy-2/diary/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
