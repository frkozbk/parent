import { routes } from "./router";
export const AdPlugin = {
  install(Vue, options) {
    const { router } = options;
    routes.forEach((route) => router.addRoute(route));
  },
};
