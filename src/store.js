import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios';

import dishes from './store/dishes';
import orders from './store/orders';
import workers from './store/workers';
import cart from './store/cart';
import login from './store/login';
import form from './store/form';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		dishes,
		orders,
		workers,
		cart,
		login,
		form
	},
  	state: {
  		BASE_DISH_URL: `${process.env.VUE_APP_API_URL}dishes/`,
  		BASE_ORDERS_URL: `${process.env.VUE_APP_API_URL}orders/`,
  		BASE_USERS_URL: `${process.env.VUE_APP_API_URL}users/`
  	},
  	mutations: {},
  	getters: {},
  	actions: {}
});