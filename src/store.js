import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	dishes: [
		{
			name: 'Spicy Beef Burger',
			img: require('@/assets/img/menu-list/dishes/1.jpg'),
			price: 12,
			quantity: 1,
			excerpt: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit',
			descr: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.',
			include: 'Meat, Potato, Bread',
			weight: 150,
			status: 'unprocessed',
			id: '1'
		},
		{
			name: 'Spicy Chily Chicken',
			img: require('@/assets/img/menu-list/dishes/2.jpg'),
			price: 3,
			quantity: 1,
			include: 'Meat, Potato, Bread',
			weight: 150,
			status: 'unprocessed',
			excerpt: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit',
			descr: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.',
			id: '2'
		},
		{
			name: 'Mixed Fruit Lassi',
			img: require('@/assets/img/menu-list/dishes/3.jpg'),
			price: 10,
			quantity: 1,
			include: 'Meat, Potato, Bread',
			weight: 150,
			status: 'unprocessed',
			excerpt: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit',
			descr: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.',
			id: '3'
		},
		{
			name: 'Special Chocolety Toast',
			img: require('@/assets/img/menu-list/dishes/4.jpg'),
			price: 19,
			quantity: 1,
			weight: 150,
			status: 'unprocessed',
			include: 'Meat, Potato, Bread',
			excerpt: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit',
			descr: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.',
			id: '4'
		}
	],
	workers: [
		{
			name: 'Thor Odinson',
			password: 'mielnir',
			id: '1'
		},
		{
			name: 'Steve Rodgers',
			password: 'shield',
			id: '2'
		},
		{
			name: 'Vanda Maximova',
			password: 'vision',
			id: '3'
		},
		{
			name: 'Tony Stark',
			password: 'iron-man',
			id: '4'
		},
		{
			name: 'Cara Denwers',
			password: 'emotionless',
			id: '5'
		},
	],
	cart: [],
	queue: [],
	countItems: 0,
  },
  mutations: {
  	addToCart(state, payload) {
  		state.cart.push(payload.dish);
  		state.countItems++;
  	},
  	addToMenu(state, payload) {
  		state.dishes.push(payload.item);
  	},
  	addToWorkers(state, payload) {
  		state.workers.push(payload.item);
  	},
  	addToQueue (state, payload) {

  		state.queue.push({collection: [...payload.item], date: payload.date});

  		state.cart.splice(0, payload.item.length);
  		state.countItems = 0;
  	},
  	removeFromQueue (state, payload) {
  		state.queue.splice(payload.index, 1);
  	},
  	removeFromCart (state, payload) {
  		state.cart.splice(payload.index, 1);
  		state.countItems--;
  	},
  	removeFromStore(state, payload) {
  		state.dishes.splice(payload.index, 1);
  	},
  	removeFromWorkers(state, payload) {
  		state.workers.splice(payload.index, 1);
  	},

  },
  getters: {
  	countTotalOrder: state => {
  		let arr = state.cart;
  		let total = 0;
  		for (let i = 0; i < arr.length; i++) {
  			total+=parseInt(arr[i].quantity)*parseInt(arr[i].price);
  		}

  		return `${total} $`;
  	},
  	countTotal: state => index => {
  		let arr = state.cart;
  		let total = 0;
  		total = parseInt(arr[index].quantity)*parseInt(arr[index].price);
  		return `${total} $`;
  	},
  },
  actions: {}
});
