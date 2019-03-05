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
      component: Home,
      meta: {
        title: 'Home | Food delivery',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of Food delivery app.'
          },
          {
            property: 'og:description',
            content: 'The home page of Food delivery app.'
          }
        ]
      }
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu,
      meta: {
        title: 'Menu | Food delivery',
        metaTags: [
          {
            name: 'description',
            content: 'Menu list of Food delivery app.'
          },
          {
            property: 'og:description',
            content: 'Menu list of Food delivery app.'
          }
        ]
      }
    },
    {
      path: "/menu/:title/",
      name: "detail",
      component: MenuDetail,
      props: true
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      meta: {
        title: 'Cart | Food delivery',
        metaTags: [
          {
            name: 'description',
            content: 'Cart with current dishes.'
          },
          {
            property: 'og:description',
            content: 'Cart with current dishes.'
          }
        ]
      }
    },
    {
      path: "/Payment",
      name: "payment",
      component: Payment,
      meta: {
        title: 'Payment | Food delivery',
        metaTags: [
          {
            name: 'description',
            content: 'Pay for the order.'
          },
          {
            property: 'og:description',
            content: 'Pay for the order.'
          }
        ]
      }
    },
    {
      path: "/stuff",
      name: "stuff",
      component: Stuff,
      meta: {
        title: 'Stuff | Food delivery',
        metaTags: [
          {
            name: 'description',
            content: 'Page for manage orders.'
          },
          {
            property: 'og:description',
            content: 'Page for manage orders.'
          }
        ]
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        title: 'Admin | Food delivery',
        metaTags: [
          {
            name: 'description',
            content: 'Page for manage dishes and workers.'
          },
          {
            property: 'og:description',
            content: 'Page for manage dishes and workers.'
          }
        ]
      }
    },
    {
      path: "/change/:id",
      name: "change",
      component: ChangeMenu
    },
    {
      path: "/add",
      name: "add",
      component: NewItem,
      meta: {
        title: 'New Dish | Food delivery',
        metaTags: [
          {
            name: 'description',
            content: 'Add new dish to menu'
          },
          {
            property: 'og:description',
            content: 'Add new dish to menu'
          }
        ]
      }
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: ChangeWorker
    },
    {
      path: "/add_worker",
      name: "add_worker",
      component: NewWorker,
      meta: {
        title: 'New worker | Food delivery',
        metaTags: [
          {
            name: 'description',
            content: 'Add new worker to stuff'
          },
          {
            property: 'og:description',
            content: 'Add new worker to stuff'
          }
        ]
      }
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        title: 'Ooops...!',
        metaTags: [
          {
            name: 'description',
            content: 'Page not found!'
          },
          {
            property: 'og:description',
            content: 'Page not found!'
          }
        ]
      }
    }
  ]
});
