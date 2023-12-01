import { s as subscribe, c as is_promise, n as noop } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, s as setContext, g as getContext, f as onDestroy, v as validate_component, m as missing_component, e as escape, a as add_attribute } from "../../../../../chunks/ssr.js";
import "firebase/storage";
import "../../../../../chunks/firebase.js";
import "../../../../../chunks/post.js";
import { $ as $format } from "../../../../../chunks/runtime.js";
import "../../../../../chunks/store_.js";
import "firebase/auth";
import "firebase/firestore";
import { w as writable, d as derived } from "../../../../../chunks/index.js";
import { g as globalHistory } from "../../../../../chunks/history.js";
import { b as base } from "../../../../../chunks/paths.js";
import { p as page } from "../../../../../chunks/stores.js";
import { L as LoadingSpinner } from "../../../../../chunks/LoadingSpinner.js";
const LOCATION = {};
const ROUTER = {};
const HISTORY = {};
const PARAM = /^:(.+)/;
const SEGMENT_POINTS = 4;
const STATIC_POINTS = 3;
const DYNAMIC_POINTS = 2;
const SPLAT_PENALTY = 1;
const ROOT_POINTS = 1;
const segmentize = (uri) => uri.replace(/(^\/+|\/+$)/g, "").split("/");
const stripSlashes = (string) => string.replace(/(^\/+|\/+$)/g, "");
const rankRoute = (route, index) => {
  const score = route.default ? 0 : segmentize(route.path).reduce((score2, segment) => {
    score2 += SEGMENT_POINTS;
    if (segment === "") {
      score2 += ROOT_POINTS;
    } else if (PARAM.test(segment)) {
      score2 += DYNAMIC_POINTS;
    } else if (segment[0] === "*") {
      score2 -= SEGMENT_POINTS + SPLAT_PENALTY;
    } else {
      score2 += STATIC_POINTS;
    }
    return score2;
  }, 0);
  return { route, score, index };
};
const rankRoutes = (routes) => routes.map(rankRoute).sort(
  (a, b) => a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index
);
const pick = (routes, uri) => {
  let match;
  let default_;
  const [uriPathname] = uri.split("?");
  const uriSegments = segmentize(uriPathname);
  const isRootUri = uriSegments[0] === "";
  const ranked = rankRoutes(routes);
  for (let i = 0, l = ranked.length; i < l; i++) {
    const route = ranked[i].route;
    let missed = false;
    if (route.default) {
      default_ = {
        route,
        params: {},
        uri
      };
      continue;
    }
    const routeSegments = segmentize(route.path);
    const params = {};
    const max = Math.max(uriSegments.length, routeSegments.length);
    let index = 0;
    for (; index < max; index++) {
      const routeSegment = routeSegments[index];
      const uriSegment = uriSegments[index];
      if (routeSegment && routeSegment[0] === "*") {
        const splatName = routeSegment === "*" ? "*" : routeSegment.slice(1);
        params[splatName] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }
      if (typeof uriSegment === "undefined") {
        missed = true;
        break;
      }
      const dynamicMatch = PARAM.exec(routeSegment);
      if (dynamicMatch && !isRootUri) {
        const value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        missed = true;
        break;
      }
    }
    if (!missed) {
      match = {
        route,
        params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }
  return match || default_ || null;
};
const combinePaths = (basepath, path) => `${stripSlashes(
  path === "/" ? basepath : `${stripSlashes(basepath)}/${stripSlashes(path)}`
)}/`;
const Router = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $location, $$unsubscribe_location;
  let $routes, $$unsubscribe_routes;
  let $base, $$unsubscribe_base;
  let $activeRoute, $$unsubscribe_activeRoute;
  let { basepath = "/" } = $$props;
  let { url = null } = $$props;
  let { history = globalHistory } = $$props;
  setContext(HISTORY, history);
  const locationContext = getContext(LOCATION);
  const routerContext = getContext(ROUTER);
  const routes = writable([]);
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  const activeRoute = writable(null);
  $$unsubscribe_activeRoute = subscribe(activeRoute, (value) => $activeRoute = value);
  let hasActiveRoute = false;
  const location = locationContext || writable(url ? { pathname: url } : history.location);
  $$unsubscribe_location = subscribe(location, (value) => $location = value);
  const base2 = routerContext ? routerContext.routerBase : writable({ path: basepath, uri: basepath });
  $$unsubscribe_base = subscribe(base2, (value) => $base = value);
  const routerBase = derived([base2, activeRoute], ([base3, activeRoute2]) => {
    if (!activeRoute2)
      return base3;
    const { path: basepath2 } = base3;
    const { route, uri } = activeRoute2;
    const path = route.default ? basepath2 : route.path.replace(/\*.*$/, "");
    return { path, uri };
  });
  const registerRoute = (route) => {
    const { path: basepath2 } = $base;
    let { path } = route;
    route._path = path;
    route.path = combinePaths(basepath2, path);
    if (typeof window === "undefined") {
      if (hasActiveRoute)
        return;
      const matchingRoute = pick([route], $location.pathname);
      if (matchingRoute) {
        activeRoute.set(matchingRoute);
        hasActiveRoute = true;
      }
    } else {
      routes.update((rs) => [...rs, route]);
    }
  };
  const unregisterRoute = (route) => {
    routes.update((rs) => rs.filter((r) => r !== route));
  };
  if (!locationContext) {
    setContext(LOCATION, location);
  }
  setContext(ROUTER, {
    activeRoute,
    base: base2,
    routerBase,
    registerRoute,
    unregisterRoute
  });
  if ($$props.basepath === void 0 && $$bindings.basepath && basepath !== void 0)
    $$bindings.basepath(basepath);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.history === void 0 && $$bindings.history && history !== void 0)
    $$bindings.history(history);
  {
    {
      const { path: basepath2 } = $base;
      routes.update((rs) => rs.map((r) => ({
        ...r,
        path: combinePaths(basepath2, r._path)
      })));
    }
  }
  {
    {
      const bestMatch = pick($routes, $location.pathname);
      activeRoute.set(bestMatch);
    }
  }
  $$unsubscribe_location();
  $$unsubscribe_routes();
  $$unsubscribe_base();
  $$unsubscribe_activeRoute();
  return `${slots.default ? slots.default({
    route: $activeRoute && $activeRoute.uri,
    location: $location
  }) : ``}`;
});
const Route = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $activeRoute, $$unsubscribe_activeRoute;
  let { path = "" } = $$props;
  let { component = null } = $$props;
  let routeParams = {};
  let routeProps = {};
  const { registerRoute, unregisterRoute, activeRoute } = getContext(ROUTER);
  $$unsubscribe_activeRoute = subscribe(activeRoute, (value) => $activeRoute = value);
  const route = {
    path,
    // If no path prop is given, this Route will act as the default Route
    // that is rendered if no other Route in the Router is a match.
    default: path === ""
  };
  registerRoute(route);
  onDestroy(() => {
    unregisterRoute(route);
  });
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  {
    {
      if ($activeRoute && $activeRoute.route === route) {
        routeParams = $activeRoute.params;
      }
      const { component: c, path: path2, ...rest } = $$props;
      routeProps = rest;
      if (c) {
        if (c.toString().startsWith("class "))
          component = c;
        else
          component = c();
      }
    }
  }
  $$unsubscribe_activeRoute();
  return `${$activeRoute && $activeRoute.route === route ? `${component ? `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(resolvedComponent) {
      return ` ${validate_component(resolvedComponent?.default || resolvedComponent || missing_component, "svelte:component").$$render($$result, Object.assign({}, routeParams, routeProps), {}, {})} `;
    }(__value);
  }(component)}` : `${slots.default ? slots.default({ params: routeParams }) : ``}`}` : ``}`;
});
const PostEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe($format, (value) => $t = value);
  let { post } = $$props;
  let tempPost = post;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$unsubscribe_t();
  return `<div class="place flex place-content-center pt-60"><form class="w-full max-w-lg"><div class="mb-6 flex justify-center"><h1 class="font-abril text-4xl text-blue-0">${escape($t("EDIT POST"))}</h1></div> <div class="-mx-3 mb-6 flex flex-wrap"><div class="w-full px-3"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="title"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" id="title" required placeholder="Title"${add_attribute("value", tempPost.title, 0)}> <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Title"))}</span></label></div></div> <div class="-mx-3 mb-4 flex flex-wrap"><div class="h-full w-full px-3"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="description"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="description" placeholder="Description"${add_attribute("value", tempPost.description, 0)}> <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Description"))}</span></label> <p class="mt-3 text-xs italic text-gray-600">${escape($t("Make it as simple as informative"))}</p></div></div> <div class="-mx-3 mb-6 flex flex-wrap"><div class="mb-6 w-full px-3 md:mb-0 md:w-1/2"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="author"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" id="author" placeholder="Author" required${add_attribute("value", tempPost.author, 0)}> <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Author Name"))}</span></label></div> <div class="w-full px-3 md:w-1/2"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="authorEmail"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="email" id="authorEmail" placeholder="email@web.net" required${add_attribute("value", tempPost.authorEmail, 0)}> <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Author Email"))}</span></label></div></div> <div class="-mx-3 mb-2 ms-0 flex flex-wrap"><div class="mb-6 w-2/5"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="price"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" id="price" placeholder="400$" required${add_attribute("value", tempPost.price, 0)}> <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Price"))}</span></label></div> <div class="mb-3 h-1/2 px-3 md:mb-3 md:w-3/5"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="files"><input class="transparent peer block h-8 w-full border-none bg-transparent bg-white-1 p-0 text-center placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="file" id="images" multiple placeholder="Files"> <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"></span></label> ${`<p class="mt-3 text-xs italic text-gray-600">${escape($t("Quantity of images"))}:${escape(tempPost.images.length)}</p>`}</div></div> ${`<button class="group relative mx-[136px] flex w-1/2 items-center justify-center overflow-hidden rounded-md border border-orange-0 px-8 py-3 focus:outline-none" type="button"><span class="absolute inset-x-0 bottom-0 h-[2px] bg-orange-0 transition-all group-hover:h-full group-active:bg-orange-0"></span> <span class="relative text-sm font-medium text-orange-0 transition-colors group-hover:text-white">${escape($t("Submit"))}</span></button>`}</form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let isLoading = true;
  let post;
  let { data } = $$props;
  if (data.post !== void 0 && data.post !== null) {
    isLoading = false;
    post = data.post;
  } else if ($page.params !== void 0 && $page.params !== null) {
    post = $page.params;
    isLoading = false;
  } else {
    isLoading = true;
    console.error("error getting params for posts page");
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-zzyrst_START -->${$$result.title = `<title>${escape("Edit page of the post")}</title>`, ""}<meta name="edit of a single blog page" content="Edit form for the blog post"><!-- HEAD_svelte-zzyrst_END -->`, ""} ${validate_component(Router, "Router").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Route, "Route").$$render($$result, { path: `${base}/posts/:id/edit/` }, {}, {
        default: ({ params }) => {
          return `${isLoading ? `${validate_component(LoadingSpinner, "LoadingSpinner").$$render($$result, {}, {}, {})}` : `${validate_component(PostEdit, "PostEdit").$$render($$result, { post }, {}, {})}`}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
