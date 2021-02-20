import store from "@/store";

import Vue from "vue";
import Router from "vue-router";
import NgoRegistrationPage2 from "../components/pages/NgoRegistrationPage2";
import guestPage from "../components/pages/guestPage";
import userHome from "../components/pages/userHome";
import pageNotFound from "../components/pages/PageNotFound.vue";
import Ongoingproject from "../components/pages/OngoingProjects.vue";
import homePage from "../components/pages/homePage.vue";
import ForgotPassword from "../components/pages/ForgotPassword.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "homeRoute",
      component: homePage,
    },
    {
      path: "/login",
      name: "loginPage",
      component: () => import("../components/pages/Login"),
      meta: { onlyGuestUser: true },
    },
    {
      path: "/register",
      name: "registerPage",
      component: () => import("../components/pages/Register"),
      meta: { onlyGuestUser: true },
    },
    {
      path: "/ngo/register",
      name: "ngoRegister",
      component: () => import("../components/pages/NgoRegistrationPage"),
    },
    {
      path: "/ngo/register2",
      name: "ngoRegister2",
      component: NgoRegistrationPage2,
    },
    {
      path: "/guest/donate",
      name: "guestPage",
      component: guestPage,
    },
    {
      path: "/user",
      name: "userHome",
      component: userHome,
      meta: { onlyAuthUser: true },
    },
    {
      path: "/projects",
      name: "projects",
      component: Ongoingproject,
    },
    {
      path: "/reset-password",
      name: "passwordReset",
      component: ForgotPassword,
    },
    {
      path: "*",
      name: "pagenotfound",
      component: pageNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.dispatch("auth/getAuthUser").then(() => {
    if (to.meta.onlyAuthUser) {
      if (store.getters["auth/isAuthenticated"]) {
        next();
      } else {
        next({ name: "pagenotfound" });
      }
    } else if (to.meta.onlyGuestUser) {
      if (store.getters["auth/isAuthenticated"]) {
        next("/");
      } else {
        next();
      }
    } else {
      next();
    }
  });
});

export default router;
