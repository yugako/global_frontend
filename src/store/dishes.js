import axios from 'axios';

export default {
  	state: {
  		dishes: [],
      errors: [],
      errorHappened: false,
      saveHappened: false,
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
      logErrors(state, payload) {
        state.errors = payload;
      },
      defaultInfoState(state) {
        state.errorHappened = false;
        state.saveHappened = false;
      },
      showErrors(state) {
        state.errorHappened = true;
      },
      showSuccess(state) {
        state.saveHappened = true;
      }
      
  	},
  	actions: {
		getDishes : async (context,payload) => {
		  	let { data } = await axios.get('http://localhost:3000/dishes')
		  	context.commit('fillDishes', data)
		},
		saveDish (context, payload) {
      context.commit('defaultInfoState');
	  		axios.post('http://localhost:3000/dishes/', payload)
				.then(() => {              
					context.commit('addDish', payload);
          context.commit('showSuccess');
				})
        .catch(e => {
          context.commit('logErrors', e.response.data.errors);
          context.commit('showErrors');
        });
   		},
   		deleteDishes (context, id) {
	  		axios.delete('http://localhost:3000/dishes/' + id)
		 		.then(() => {              
			 		context.commit('deleteDish', id)
		  		})
   		},
	   	updateDishes (context, payload) {
        context.commit('defaultInfoState');
		  	axios.put('http://localhost:3000/dishes/' + payload.id, payload)
				.then(() => {              
					context.commit('updateDish', payload);
          context.commit('showSuccess');
				})
        .catch(e => {
          context.commit('logErrors', e.response.data.errors);
          context.commit('showErrors');
        })
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
