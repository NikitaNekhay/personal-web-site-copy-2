import { c as create_ssr_component, h as setContext, g as getContext, s as subscribe, j as onDestroy, k as is_promise, n as noop, v as validate_component, m as missing_component } from "./index.js";
import { w as writable, d as derived } from "./index2.js";
import { g as globalHistory } from "./history.js";
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
  const base = routerContext ? routerContext.routerBase : writable({ path: basepath, uri: basepath });
  $$unsubscribe_base = subscribe(base, (value) => $base = value);
  const routerBase = derived([base, activeRoute], ([base2, activeRoute2]) => {
    if (!activeRoute2)
      return base2;
    const { path: basepath2 } = base2;
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
    base,
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
      return `
            ${validate_component(resolvedComponent?.default || resolvedComponent || missing_component, "svelte:component").$$render($$result, Object.assign({}, routeParams, routeProps), {}, {})}
        `;
    }(__value);
  }(component)}` : `${slots.default ? slots.default({ params: routeParams }) : ``}`}` : ``}`;
});
export {
  Router as R,
  Route as a
};
