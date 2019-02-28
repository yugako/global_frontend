import axios from 'axios';

export default {
	state: {
		orders: [],
	},
	mutations: {
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
	},
	actions: {
	   	getOrders (context,payload) {
		  	axios.get(context.rootState.BASE_ORDERS_URL)
		  	.then(payload => {
		  		context.commit('fillOrders', payload.data);
		  	})
		},
		saveOrder (context, payload) {
		  	axios.post(context.rootState.BASE_ORDERS_URL, payload)
				.then(() => {              
					context.commit('addOrder', payload)
				});
	   	},
	   	updateOrder (context, payload) {
		  	axios.put(context.rootState.BASE_ORDERS_URL + payload.id, payload)
				.then(() => {              
					context.commit('updateOrder', payload)
				});
	   	},
	   	deleteOrder (context, id) {
		  	axios.delete(context.rootState.BASE_ORDERS_URL + id)
		  	.then((response) => {
		  		console.log(response.status);
		  		if (response.status === 200) {
		  			context.commit('deleteOrder', id)
		  		}	
		  	})
	   	},
	},
	getters: {
		Orders : state => {
		  	return state.orders;
		},
	}
}