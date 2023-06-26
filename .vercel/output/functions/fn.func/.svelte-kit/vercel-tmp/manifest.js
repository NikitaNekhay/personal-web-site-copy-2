export const manifest = {
	appDir: "_app",
	appPath: "Personal-Website/_app",
	assets: new Set([".nojekyll","favicon.ico","media/edit.svg","media/envelop.svg","media/external.svg","media/flowers_september1.jpg","media/flowers_september1.png","media/globe.svg","media/NIKITA.JPG","media/send.svg","media/settings.svg","media/shopping-cart.svg","media/spinner.svg","media/trash.svg","media/user-edit.svg","media/user-minus.svg","media/user-plus.svg","media/user-x.svg","media/user.svg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png",".JPG":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b2f2ac1c.js","imports":["_app/immutable/entry/start.b2f2ac1c.js","_app/immutable/chunks/index.372ec54d.js","_app/immutable/chunks/singletons.f1b0a33c.js","_app/immutable/chunks/index.ec719676.js","_app/immutable/chunks/paths.b2028148.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.bb72942c.js","imports":["_app/immutable/entry/app.bb72942c.js","_app/immutable/chunks/index.372ec54d.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js')
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
				id: "/create",
				pattern: /^\/create\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/posts",
				pattern: /^\/posts\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/posts/[id]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/posts/[id]/edit",
				pattern: /^\/posts\/([^/]+?)\/edit\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/profile/edit",
				pattern: /^\/profile\/edit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/stat",
				pattern: /^\/stat\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/works",
				pattern: /^\/works\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
