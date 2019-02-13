import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	dishes: [],
	workers: [
		{
			name: 'Thor Odinson',
			password: 'mielnir',
			id: '1'
		},
		{
			name: 'Steve Rodgers',
			password: 'shield',
			id: '2'
		},
		{
			name: 'Vanda Maximova',
			password: 'vision',
			id: '3'
		},
		{
			name: 'Tony Stark',
			password: 'iron-man',
			id: '4'
		},
		{
			name: 'Cara Denwers',
			password: 'emotionless',
			id: '5'
		},
	],
	cart: [],
	queue: [],
	countItems: 0,
  },
  mutations: {
  	addToDishes(state) {
  		axios
  		  .get('http://localhost:3000/dishes')
  		  .then(response => {
  		  	let self = this;
  		  	state.dishes = [];
  		  	response.data.forEach( function(element) {
  		  		state.dishes.push(element);
  		  	});
  		  })
  		  .catch(error => console.log(error));
  	},
  	addToCart(state, payload) {
  		state.cart.push(payload.dish);
  		state.countItems++;
  	},
  	addToMenu(state, payload) {
  		state.dishes.push(payload.item);
  	},
  	addToWorkers(state, payload) {
  		state.workers.push(payload.item);
  	},
  	addToQueue (state, payload) {
  		state.queue.push({
  			collection: [...payload.item], 
  			date: payload.date, 
  		});
  		state.cart.splice(0, payload.item.length);
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
  	removeFromStore(state, payload) {
  		state.dishes.splice(payload.index, 1);
  	},
  	removeFromWorkers(state, payload) {
  		state.workers.splice(payload.index, 1);
  	},

  },
  getters: {
  	countTotalOrder: state => {
  		let arr = state.cart;
  		let total = 0;
  		for (let i = 0; i < arr.length; i++) {
  			total+=parseInt(arr[i].quantity)*parseInt(arr[i].price);
  		}

  		return `${total} $`;
  	},
  	countTotal: state => index => {
  		let arr = state.cart;
  		let total = 0;
  		total = parseInt(arr[index].quantity)*parseInt(arr[index].price);
  		return `${total} $`;
  	},
  },
  actions: {}
});
