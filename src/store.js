import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  	state: {
		dishes: [],
		workers: [],
		cart: [],
		orders: [],
		countItems: 0,
		loginType: 'login',
		logged: JSON.parse(localStorage.getItem('log')),
		showForm: false,
		cartPreview: false,
  	},
  	mutations: {
  		isLogIn (state) {
  			state.logged = true;
  			localStorage.setItem('log', JSON.stringify(state.logged))
  		},
  		isLogOut (state) {
  			state.logged = false;
  			localStorage.setItem('log', JSON.stringify(state.logged))
  		},
  		showForm (state) {
  			state.showForm = true;
  		},
  		showCartPreview(state) {
  			state.cartPreview = true;
  		},
  		hideCartPreview(state) {
  			state.cartPreview = false;
  		},
  		hideForm (state) {
  			state.showForm = false;
  		},
  		showLogin (state) {
  			state.loginType = 'login'
  		},
  		showRegister (state) {
  			state.loginType = 'register';
  		},
  		// Dishes
		fillDishes(state, payload) {
		  	state.dishes = payload
		},
		addDish(state,payload){
	  		state.dishes.push(payload)
		},
		updateDish(state, payload) {
		  	let index = state.dishes.findIndex(dish => dish.id === payload.id);
		  	state.dishes[index] = payload;
		},
		deleteDish(state, id){
		  	let index = state.dishes.findIndex(dish => dish.id == id)
		  	state.dishes.splice(index, 1)
		},
		// Workers
		fillWorkers (state, payload) {
		  	state.workers = payload;
		},
		addWorker(state,payload){
		  	state.workers.push(payload)
		},
		updateWorker(state, payload) {
		  	let index = state.workers.findIndex(worker => worker.id === payload.id);
		  	state.workers[index] = payload;
		},
		deleteWorker(state, id){
		  	let index = state.workers.findIndex(worker => worker.id == id)
		  	state.workers.splice(index, 1)
		},
		// Orders
		fillOrders (state, payload) {
		  	state.orders = payload;
		},
		addOrder(state,payload){
		  	state.orders.push(payload)
		},
		updateOrder(state, payload) {
		  	let index = state.orders.findIndex(order => order.id === payload.id);
		  	state.orders[index] = payload;
		},
		deleteOrder(state, id){
		  	let index = state.orders.findIndex(order => order.id == id)
		  	state.orders.splice(index, 1)
		},
		// General
		addToCart(state, payload) {
			state.cart.push(payload.dish);
			state.countItems++;
		},
		cleanCart (state, payload) {
			state.cart.splice(0, payload.length);
			state.countItems = 0;
		},
		removeFromQueueCollection (state, payload) {
			// state.queue.splice(payload.index, 1);
			state.queue.forEach( function(item) {
				item.collection.splice(payload.index, 1);
			});
		},
		removeFromQueue (state, payload) {
			state.queue.splice(payload.index, 1);
		},
		removeFromCart (state, payload) {
			state.cart.splice(payload.index, 1);
			state.countItems--;
		},

  	},
  	getters: {
		Dishes : state => {
		  	return state.dishes;
		},
		Workers : state => {
		  	return state.workers;
		},
		Orders : state => {
		  	return state.orders;
		},
		logged: state => {
			return state.logged;
		},
		CartPreview: state => {
			return state.cartPreview;
		},
		countTotalOrder: state => {
			let arr = state.cart;
			let total = 0;

			arr.forEach((item) => {
				total+= parseInt(item.quantity)*parseInt(item.price);
			});

			return `${total} $`;
		},
		countTotal: state => index => {
			let arr = state.cart;
			let total = 0;
			total = parseInt(arr[index].quantity)*parseInt(arr[index].price);
			return `${total} $`;
		},
  	},
  	actions: {
  		// Dishes
		getDishes : async (context,payload) => {
		  	let { data } = await axios.get('http://localhost:3000/dishes')
		  	context.commit('fillDishes', data)
		},
		saveDish (context, payload) {
	  		axios.post('http://localhost:3000/dishes/', payload)
				.then(() => {              
					context.commit('addDish', payload)
				});
   		},
   		deleteDishes (context, id) {
	  		axios.delete('http://localhost:3000/dishes/' + id)
		 		.then(() => {              
			 		context.commit('deleteDish', id)
		  		});
   		},
	   	updateDishes (context, payload) {
		  	axios.put('http://localhost:3000/dishes/' + payload.id, payload)
				.then(() => {              
					context.commit('updateDish', payload)
				});
	   	},
	   	// Workers
	   	getWorkers : async (context,payload) => {
		  	let { data } = await axios.get('http://localhost:3000/workers')
		  	context.commit('fillWorkers', data)
		},
		saveWorker (context, payload) {
		  	axios.post('http://localhost:3000/workers/', payload)
				.then(() => {              
					context.commit('addWorker', payload)
				});
	   	},
	   	updateWorkers (context, payload) {
		  	axios.put('http://localhost:3000/workers/' + payload.id, payload)
				.then(() => {              
					context.commit('updateWorker', payload)
				});
	   	},
	   	deleteWorkers (context, id) {
		  	axios.delete('http://localhost:3000/workers/' + id)
			 	.then(() => {              
				 	context.commit('deleteWorker', id)
			  	});
	   	},
	   	// Orders
	   	getOrders : async (context,payload) => {
		  	let { data } = await axios.get('http://localhost:3000/orders')
		  	context.commit('fillOrders', data)
		},
		saveOrder (context, payload) {
		  	axios.post('http://localhost:3000/orders/', payload)
				.then(() => {              
					context.commit('addOrder', payload)
				});
	   	},
	   	updateOrder (context, payload) {
		  	axios.put('http://localhost:3000/orders/' + payload.id, payload)
				.then(() => {              
					context.commit('updateOrder', payload)
				});
	   	},
	   	deleteOrder (context, id) {
		  	axios.delete('http://localhost:3000/orders/' + id)
			 	.then(() => {              
				 	context.commit('deleteOrder', id)
			  	});
	   	},
	}
});
