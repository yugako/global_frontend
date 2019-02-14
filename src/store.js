import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios';
import qs from 'qs';
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
  	addToCart(state, payload) {
  		state.cart.push(payload.dish);
  		state.countItems++;
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
  	removeFromWorkers(state, payload) {
  		state.workers.splice(payload.index, 1);
  	},

  },
  getters: {
    Dishes : state => {
      return state.dishes;
    },
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
  actions: {
    getDishes : async (context,payload) => {
      let { data } = await axios.get('http://localhost:3000/dishes')
      context.commit('fillDishes', data)
   },
   saveDish (context, payload) {
      axios.post('http://localhost:3000/dishes/', payload)
        .then(() => {              
            context.commit('updateDish', payload)
        });
   },
   // saveDish : async (context,payload) => {
   //    let { data } = await axios.post('http://localhost:3000/dishes')
   //    context.commit('addDish', payload)
   // },
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
  }
});
