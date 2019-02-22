import axios from 'axios';

export default {
  	state: {
  		dishes: [],
      showDishes: false,
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
      toggleDishesList(state) {
        state.showDishes = !state.showDishes;
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
  	},
  	getters: {
	  	Dishes : state => {
	  	  	return state.dishes;
	  	},
      ShowDishes: state => {
        return state.showDishes;
      }
  	}
}
