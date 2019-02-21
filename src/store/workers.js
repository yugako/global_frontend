import axios from 'axios';

export default {
	state: {
		workers: [],
	},
	mutations: {
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
	},
	actions: {
	   	getWorkers : async (context,payload) => {
		  	let { data } = await axios.get('http://localhost:3000/users')
		  	context.commit('fillWorkers', data)
		},
		saveWorker (context, payload) {
		  	axios.post('http://localhost:3000/register/', payload)
				.then(() => {              
					context.commit('addWorker', payload)
				});
	   	},
	   	updateWorkers (context, payload) {
		  	axios.put('http://localhost:3000/users/' + payload.id, payload)
				.then(() => {              
					context.commit('updateWorker', payload)
				});
	   	},
	   	deleteWorkers (context, id) {
		  	axios.delete('http://localhost:3000/users/' + id)
			 	.then(() => {              
				 	context.commit('deleteWorker', id)
			  	});
	   	},
	},
	getters: {
		Workers : state => {
		  	return state.workers;
		},
	}
}