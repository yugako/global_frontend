export default {
	state: {
		cart: [],
		countItems: 0,
		cartPreview: false,
	},
	mutations: {
		showCartPreview(state) {
			state.cartPreview = true;
		},
		hideCartPreview(state) {
			state.cartPreview = false;
		},
		addToCart(state, payload) {
			state.cart.push(payload.dish);
			state.countItems++;
		},
		cleanCart (state, payload) {
			state.cart.splice(0, payload.length);
			state.countItems = 0;
		},
		removeFromCart (state, payload) {
			state.cart.splice(payload.index, 1);
			state.countItems--;
		},
	},
	actions: {},
	getters: {
		CartPreview: state => {
			return state.cartPreview;
		},
		countTotalOrder: state => {
			let arr = state.cart;
			let total = 0;

			arr.forEach((item) => {
				total+= parseInt(item.quantity)*parseInt(item.price);
			});

			return `${total} $`;
		},
		countTotal: state => index => {
			let arr = state.cart;
			let total = 0;
			total = parseInt(arr[index].quantity)*parseInt(arr[index].price);
			return `${total} $`;
		},
	}
}