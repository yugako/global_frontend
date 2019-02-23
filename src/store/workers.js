import axios from 'axios';

export default {
	state: {
		workers: [],
		errors: [],
		errorHappened: false,
		saveHappened: false,
		showWorkers: false,
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
		toggleWorkersList(state) {
		  state.showWorkers = !state.showWorkers;
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
	   	getWorkers : async (context,payload) => {
		  	let { data } = await axios.get('http://localhost:3000/users')
		  	context.commit('fillWorkers', data)
		},
		saveWorker (context, payload) {
			context.commit('defaultInfoState');
		  	axios.post('http://localhost:3000/register/', payload)
				.then(() => {              
					context.commit('addWorker', payload);
					context.commit('showSuccess');
					setTimeout(() => {
						context.commit('defaultInfoState');
					} , 1500);
				})
				.catch(e => {
					context.commit('logErrors', e.response.data.errors);
					context.commit('showErrors');
					setTimeout(() => {
						context.commit('defaultInfoState');
					} , 2500);
				});
	   	},
	   	updateWorkers (context, payload) {
	   		context.commit('defaultInfoState');
		  	axios.put('http://localhost:3000/users/' + payload.id, payload)
				.then(() => {              
					context.commit('updateWorker', payload);
					context.commit('showSuccess');
					setTimeout(() => {
						context.commit('defaultInfoState');
					} , 1500);
				})
				.catch(e => {
					context.commit('logErrors', e.response.data.errors);
					context.commit('showErrors');
					setTimeout(() => {
						context.commit('defaultInfoState');
					} , 2500);
				})
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
		ShowWorkers: state => {
		  return state.showWorkers;
		},
		Errors: state => {
			return state.errors;
		},
		ErrorsState: state => {
			return state.errorHappened
		},
		SuccessState: state => {
			return state.saveHappened
		}
	}
}