import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios';
import qs from 'qs';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	dishes: [],
	workers: [],
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
  	addToCart(state, payload) {
  		state.cart.push(payload.dish);
  		state.countItems++;
  	},
  	addToQueue (state, payload) {
  		state.queue.push({
  			collection: [...payload.item], 
  			date: payload.date,
        price: payload.price 
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

  },
  getters: {
    Dishes : state => {
      return state.dishes;
    },
    Workers : state => {
      return state.workers;
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
  }
});
