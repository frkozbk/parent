import { LOGIN_SUCCESS, LOGIN_PENDING } from "./mutation-types";

export default {
  [LOGIN_PENDING](state) {
    state.loginRequestStatus = "pending";
  },
  [LOGIN_SUCCESS](state) {
    state.loginRequestStatus = "pending";
  },
};
