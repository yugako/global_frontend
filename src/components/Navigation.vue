<template>
	<div class="container">
		<div class="row justify-content-between align-items-center">
			<div class="logo">
				<router-link to='/'>
					<img src="../assets/img/logo/3.png" alt="">
				</router-link>
				
			</div>
			<div class="account">
				<a class="account__link" v-if='!this.$store.state.logged' @click='showForm()'>

					<img class="account__image" src="../assets/img/icons/user.svg" alt="">
				</a>
				<a class="account__link" v-else @click='logout()'>
					LogOut
					<img class="account__image" src="../assets/img/icons/sign-out.svg" alt="">
				</a>
				<a class="account__link" v-if='!this.$store.state.logged' @click='showOrderPreview = true'>
					<img class="account__image" src="../assets/img/icons/cart.svg" alt="">
					<span class="count">{{this.$store.state.countItems}}</span>
				</a>
			</div>
			<!-- /.account -->
		</div>
		<!-- /.row -->

		<!-- User login/register -->
		<transition name="slide-fade">
			<div class="overlayLogin" v-if='this.$store.state.showForm && !this.$store.state.logged'>
				<div class="login-form" >
					<ul class="login-list">
						<li :class='{active: this.$store.state.loginType === "login"}' @click='showLogin()' class="login-list__item">Login</li>
						<li :class='{active: this.$store.state.loginType === "register"}' @click='showRegister()' class="login-list__item">Register</li>
					</ul>
					
					<component :is="componentInstance" />

				    <span class="close" @click='hideForm()'>&times;</span>
				</div>
			</div>
		</transition>
		<!-- End user login/register -->
		<!-- Start order preview -->
		<transition name="slide-fade">
			<div class="overlayPreview" v-if='showOrderPreview'>
				<div class="order-preview">
					<div class="order-preview__title">
						Your current order
					</div>
					<!-- /.order-preview__title -->
					<div class="order-preview__items">
						<div class="cart-error" v-if='cart.length === 0'>
							No items in cart
						</div>
						<!-- /.cart-error -->
						<div class="order-preview__item" v-for='(item, index) in cart' :key='index'>
							<div class="order-preview__item_thumb">
								<img src="@/assets/img/menu-list/placeImg.jpg" :alt='item.title'>
							</div>
							<!-- /.order-preview__item_thumb -->
							<div class="order-preview__item_content">
								<div class="order-preview__info">
									<div class="product-name">{{item.title}}</div>
									<!-- /.product-name -->
									<div class="product-quantity">Quantity: {{item.quantity}}</div>
									<!-- /.product-quantity -->
									<div class="product-price">{{item.price}}$</div>
									<!-- /.product-price -->
								</div>
								<!-- /.order-preview__info -->
								
								<img @click='removeFromCart(index)' src="../assets/img/icons/trash.svg" class="order-preview__item_remove">
							</div>
							<!-- /.order-preview__item_content -->	
						</div>
						<!-- /.order-preview__item -->
					</div>
					<!-- /.order-preview__items -->
					<div class="total">
						<span class="total-title">Total:</span>
						<span class="total-price">{{countTotal}}</span>
					</div>
					<!-- /.total -->
					<div class="order-preview__buttons">
						<router-link to='/cart' class="order-preview__button food__btn">View cart</router-link>
						<!-- /.cart -->
						<router-link to='/payment' class="order-preview__button food__btn">Checkout</router-link>
						<!-- /.checkout -->
					</div>
					<!-- /.order-preview__buttons -->
					
				    <span class="close" @click='showOrderPreview = false'>&times;</span>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
// @ is an alias to /src
import LogIn from '@/components/Signin/LogIn.vue';
import Register from '@/components/Signin/Register.vue';

export default {
  name: "navigation",
  data () {
  	return {
  		showOrderPreview: false,
  		cart: this.$store.state.cart,
  	}
  },
  methods: {
  	removeFromCart (index) {
  		this.$store.commit('removeFromCart', {index});
  	},
  	showForm () {
  		this.$store.commit('showForm');
  	},
  	hideForm() {
  		this.$store.commit('hideForm');
  	},
  	showLogin() {
  		this.$store.commit('showLogin');
  	},
  	showRegister() {
  		this.$store.commit('showRegister');
  	},
  	logout () {
  	    localStorage.removeItem('jwtToken');
  	    this.$store.commit('isLogOut');
  	    this.$router.push({
  	      name: 'home'
  	    })
  	  }
  },
  computed: {
  	countTotal () {
  		return this.$store.getters.countTotalOrder;
  	},
  	componentInstance () {
      return this.$store.state.loginType === 'login' ? 'LogIn' : 'Register';
    }
  },
  components: {
    LogIn,
    Register
  }
};
</script>
<style lang="sass">
	@import '../assets/sass/nav'
</style>
