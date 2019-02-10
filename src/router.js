import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";

import Menu from "./views/Menu.vue";
import MenuDetail from "./views/MenuDetail.vue";

import Cart from "./views/Cart.vue";
import Payment from "./views/Payment.vue";

import Stuff from "./views/Stuff.vue";
import Admin from "./views/Admin.vue";

import ChangeMenu from "./components/Admin/Menu/ChangeMenu.vue";
import NewItem from "./components/Admin/Menu/NewItem.vue";

import ChangeWorker from "./components/Admin/Workers/ChangeWorker.vue";
import NewWorker from "./components/Admin/Workers/NewWorker.vue";

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
      component: Admin,
    },
    {
      path: "/change/:id",
      name: "change",
      component: ChangeMenu
    },
    {
      path: "/add",
      name: "add",
      component: NewItem
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: ChangeWorker
    },
    {
      path: "/add_worker",
      name: "add_worker",
      component: NewWorker
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
