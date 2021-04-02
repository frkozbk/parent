import { routes } from "./router";
import app1state from "./store/modules/app1state";
export const LoginPlugin = {
  install(Vue, options) {
    const { router, store } = options;
    router.addRoutes(routes);
    store.registerModule("app1state", app1state);
  },
};
