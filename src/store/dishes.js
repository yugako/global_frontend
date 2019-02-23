import axios from 'axios';

export default {
  	state: {
  		dishes: [],
      errorsDishes: [],
      errorDishesHappened: false,
      saveDishesHappened: false,
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
      logDishesErrors(state, payload) {
        state.errorsDishes = payload;
      },
      defaultDishesInfoState(state) {
        state.errorDishesHappened = false;
        state.saveDishesHappened = false;
      },
      showDishesErrors(state) {
        state.errorDishesHappened = true;
      },
      showDishesSuccess(state) {
        state.saveDishesHappened = true;
      }
      
  	},
  	actions: {
		getDishes : async (context,payload) => {
		  	let { data } = await axios.get(context.rootState.BASE_DISH_URL)
		  	context.commit('fillDishes', data)
		},
		saveDish (context, payload) {
      context.commit('defaultDishesInfoState');
	  		axios.post(context.rootState.BASE_DISH_URL, payload)
				.then(() => {              
					context.commit('addDish', payload);
          context.commit('showDishesSuccess');
          setTimeout(() => {
            context.commit('defaultDishesInfoState');
          }, 1500);
				})
        .catch(e => {
          context.commit('logDishesErrors', e.response.data.errors);
          context.commit('showDishesErrors');
          setTimeout(() => {
            context.commit('defaultDishesInfoState');
          }, 2500);
        });
   		},
   		deleteDishes (context, id) {
	  		axios.delete(context.rootState.BASE_DISH_URL + id)
		 		.then(() => {              
			 		context.commit('deleteDish', id)
		  		})
   		},
	   	updateDishes (context, payload) {
        context.commit('defaultDishesInfoState');

		  	axios.put(context.rootState.BASE_DISH_URL + payload.id, payload)
				.then(() => {              
					context.commit('updateDish', payload);
          context.commit('showDishesSuccess');
          setTimeout(() => {
            context.commit('defaultDishesInfoState');
          }, 1500);
				})
        .catch(e => {
          context.commit('logDishesErrors', e.response.data.errors);
          context.commit('showDishesErrors');
          setTimeout(() => {
            context.commit('defaultDishesInfoState');
          }, 2500);
        })
	   	},
  	},
  	getters: {
	  	Dishes : state => {
	  	  	return state.dishes;
	  	},
      ShowDishes: state => {
        return state.showDishes;
      },
      ErrorsDishes: state => {
        return state.errorsDishes;
      },
      ErrorsStateDishes: state => {
        return state.errorDishesHappened;
      },
      SuccessStateDishes: state => {
        return state.saveDishesHappened;
      }
  	}
}
