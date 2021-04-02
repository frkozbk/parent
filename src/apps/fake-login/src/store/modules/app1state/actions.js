import {
  LOGIN_SUCCESS,
  LOGIN_PENDING,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
} from "./mutation-types";

const login = ({ commit }) => {
  commit(LOGIN_PENDING);
  setTimeout(() => {
    commit(LOGIN_SUCCESS);
  }, 1000);
};
const logout = ({ commit }) => {
  commit(LOGOUT_PENDING);
  setTimeout(() => {
    commit(LOGOUT_SUCCESS);
  }, 1000);
};
export default {
  login,
  logout,
};
