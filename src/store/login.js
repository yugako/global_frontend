export default {
	state: {
		logged: JSON.parse(localStorage.getItem('log')),
		authUser: JSON.parse(localStorage.getItem('logUser')),
		userRole: JSON.parse(localStorage.getItem('userRole')),
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
		},
		setUserRole(state, payload) {
			state.userRole = payload;
			localStorage.setItem('userRole', JSON.stringify(state.userRole))
		},
		resetAuthInfo() {
			localStorage.removeItem('logUser');
			localStorage.removeItem('userRole');
		} 
	},
	getters: {
		logged: state => {
			return state.logged;
		},
		UserName: state => {
			return state.authUser;
		},
		UserRole: state => {
			return state.userRole;
		}
	}
}