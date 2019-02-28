export default {
	state: {
		logged: JSON.parse(localStorage.getItem('log')),
		authUser: JSON.parse(localStorage.getItem('logUser')),
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
		setUserName (state, payload) {
			state.authUser = payload;
			localStorage.setItem('logUser', JSON.stringify(state.authUser))
		}
	},
	getters: {
		logged: state => {
			return state.logged;
		},
		UserName: state => {
			return state.authUser;
		}
	}
}