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
	},
	getters: {
		Orders : state => {
		  	return state.orders;
		},
	}
}