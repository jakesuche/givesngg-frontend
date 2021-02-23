import axios from "axios";
const myAxios = axios.create({
  baseURL: "https://givesng-staging.herokuapp.com",
});
import axiosInstance from "@/services/axios";

export default {
  namespaced: true,
  state: {
    user: null,
    isAuthResolved: false,
  },

  getters: {
    authUser(state) {
      return state.user || null;
    },
    isAuthenticated(state) {
      return !!state.user;
    },
  },

  actions: {
    registerUser(context, userData) {
      return myAxios.post("/api/v1/users/signup", userData);
    },
    loginUser({ commit }, userData) {
      return myAxios.post("/api/v1/users/login", userData).then((res) => {
        const user = res.data;
        const token = res.data["token"];
        localStorage.setItem("auth-token", token);
        commit("setAuthUser", user);
        return user;
      });
    },
    getAuthUser(context) {
      const authUser = context.getters["authUser"];

      if (authUser) {
        return Promise.resolve(authUser);
      }
      const config = {
        headers: {
          "Cache-control": "no-cache",
        },
      };
      return axiosInstance
        .get("/api/v1/users/me", config)
        .then((res) => {
          const user = res.data;
          context.commit("setAuthUser", user);
          context.commit("isAuthResolved", true);
          return context.state.user;
        })
        .catch((err) => {
          context.commit("setAuthUser", null);
          context.commit("isAuthResolved", true);
          return err;
        });
    },
    UserForgotPassword(context, email) {
      console.log(email);
      return myAxios.patch("/api/v1/users/updatePassword", email);
    },
    logOutUser({ commit }) {
      let promise = new Promise((resolve) => {
        resolve({
          maessage: "You have logout out",
        });
      });
      promise.then((res) => {
        localStorage.clear("auth-token");
        commit("setAuthUser", null);
        console.log(res);
        return true;
      });
      promise.catch((err) => {
        console.log(err.response);
      });
    },
  },
  mutations: {
    setAuthUser(state, user) {
      return (state.user = user);
    },
    isAuthResolved(state, isAuthResolved) {
      return (state.isAuthResolved = isAuthResolved);
    },
  },
};
