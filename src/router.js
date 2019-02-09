import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";

import Menu from "./views/Menu.vue";
import MenuDetail from "./views/MenuDetail.vue";

import Cart from "./views/Cart.vue";
import Payment from "./views/Payment.vue";

import Stuff from "./views/Stuff.vue";
import Admin from "./views/Admin.vue";

import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: MenuDetail
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/Payment",
      name: "payment",
      component: Payment
    },
    {
      path: "/stuff",
      name: "stuff",
      component: Stuff
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});