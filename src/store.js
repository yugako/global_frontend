import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	dishes: [
		{
			name: 'Spicy Beef Burger',
			img: require('@/assets/img/menu-list/dishes/1.jpg'),
			price: '12 $',
			quantity: 1,
			excerpt: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit',
			descr: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.',
			include: ['Meat', 'Potato', 'Bread'],
			id: '1'
		},
		{
			name: 'Spicy Chily Chicken',
			img: require('@/assets/img/menu-list/dishes/2.jpg'),
			price: '3 $',
			quantity: 1,
			include: ['Meat', 'Potato', 'Bread'],
			excerpt: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit',
			descr: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.',
			id: '2'
		},
		{
			name: 'Mixed Fruit Lassi',
			img: require('@/assets/img/menu-list/dishes/3.jpg'),
			price: '10 $',
			quantity: 1,
			include: ['Meat', 'Potato', 'Bread'],
			excerpt: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit',
			descr: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.',
			id: '3'
		},
		{
			name: 'Special Chocolety Toast',
			img: require('@/assets/img/menu-list/dishes/4.jpg'),
			price: '19 $',
			quantity: 1,
			include: ['Meat', 'Potato', 'Bread'],
			excerpt: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit',
			descr: 'Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.',
			id: '4'
		}
	],
	workers: [
		{
			name: 'Thor Odinson',
			password: 'mielnir'
		},
		{
			name: 'Steve Rodgers',
			password: 'shield'
		},
		{
			name: 'Vanda Maximova',
			password: 'vision'
		},
		{
			name: 'Tony Stark',
			password: 'iron-man'
		},
		{
			name: 'Cara Denwers',
			password: 'emotionless'
		},
	],
	cart: [],
	countItems: 0,
  },
  mutations: {
  	addToCart(state, payload) {
  		
  		state.cart.push(payload.dish);
  		state.countItems++;
  	},
  	removeFromCart (state, payload) {
  		state.cart.splice(payload.index, 1);
  		state.countItems--;
  	}
  },
  getters: {
  	countTotalOrder: state => {
  		let arr = state.cart;
  		let total = 0;
  		for (var i = 0; i < arr.length; i++) {
  			total+=(arr[i].quantity*parseInt(arr[i].price));
  		}

  		return `${total} $`;
  	},
  	countTotal: state => index => {
  		let arr = state.cart;
  		let total = 0;
  		total = (arr[index].quantity*parseInt(arr[index].price));
  		return `${total} $`;
  	},
  },
  actions: {}
});
