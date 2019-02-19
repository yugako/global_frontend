export default {
	state: {
		logged: JSON.parse(localStorage.getItem('log')),
	},
	mutations: {
		isLogIn (state) {
			state.logged = true;
			localStorage.setItem('log', JSON.stringify(state.logged))
		},
		isLogOut (state) {
			state.logged = false;
			localStorage.setItem('log', JSON.stringify(state.logged))
		},
	},
	getters: {
		logged: state => {
			return state.logged;
		},
	}
}