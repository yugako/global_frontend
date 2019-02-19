export default {
	state: {
		loginType: 'login',
		showForm: false,
	},
	mutations: {
		showForm (state) {
			state.showForm = true;
		},
		hideForm (state) {
			state.showForm = false;
		},
		showLogin (state) {
			state.loginType = 'login'
		},
		showRegister (state) {
			state.loginType = 'register';
		},
	}
}