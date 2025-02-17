import { c as create_ssr_component, j as setContext, v as validate_component, m as missing_component } from "./index.js";
import "./paths.js";
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <title>PERSONAL WEB-PAGE - CV - WORKS</title>\r\n    <meta name="author" content="NIKITA NIAKHAI">\r\n    ' + head + '\r\n    <meta charset="utf-8" />\r\n    <link rel="icon" href="' + assets + '/favicon.ico" />\r\n    <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />\r\n    <meta name="viewport" content="width=device-width" />\r\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />\r\n\r\n    <link rel="preconnect" href="https://fonts.googleapis.com">\r\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r\n<!-- <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Anonymous+Pro:ital,wght@0,400;0,700;1,400&family=Maven+Pro:wght@400;500;700;900&display=swap" rel="stylesheet"> -->\r\n  </head>\r\n  <body data-sveltekit-preload-data="hover" class="bg-white-0">\r\n\r\n    <script src="https://kit.fontawesome.com/d7e914893e.js" crossorigin="anonymous">\r\n         const setCorsHeaders = () => {\r\n        // Allow requests from all origins\r\n        const allowOrigin = "*";\r\n\r\n        // Set allowed headers and methods\r\n        const allowedHeaders = "Content-Type";\r\n        const allowedMethods = "GET, POST, PUT, DELETE";\r\n\r\n        // Set CORS headers\r\n        document.addEventListener("DOMContentLoaded", () => {\r\n          const headers = {\r\n            "Access-Control-Allow-Origin": allowOrigin,\r\n            "Access-Control-Allow-Headers": allowedHeaders,\r\n            "Access-Control-Allow-Methods": allowedMethods,\r\n          };\r\n          Object.entries(headers).forEach(([name, value]) => {\r\n            document.header(name, value);\r\n          });\r\n        });\r\n      };\r\n\r\n      setCorsHeaders();\r\n    <\/script>\r\n    <div style="display: contents">' + body + "</div>\r\n  </body>\r\n</html>\r\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1eo165t"
};
function get_hooks() {
  return {};
}
export {
  set_building as a,
  set_private_env as b,
  get_hooks as g,
  options as o,
  public_env as p,
  set_public_env as s
};
