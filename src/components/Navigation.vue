<template>
	<div class="container">
		<div class="row justify-content-between align-items-center">
			<div class="logo">
				<router-link to='/'>
					<img src="../assets/img/logo/3.png" alt="">
				</router-link>
				
			</div>
			<div class="account">
				<a class="account__link" @click='showForm = true'>
					<img class="account__image" src="../assets/img/icons/user.svg" alt="">
				</a>
				
				<a class="account__link" @click='showOrderPreview = true'>
					<img class="account__image" src="../assets/img/icons/cart.svg" alt="">
					<span class="count">{{this.$store.state.countItems}}</span>
				</a>
			</div>
			<!-- /.account -->
		</div>
		<!-- /.row -->

		<!-- User login/register -->
		<transition name="slide-fade">
			<div class="overlayLogin" v-if='showForm'>
				<div class="login-form" >
					<ul class="login-list">
						<li :class='{active: loginType === "login"}' @click='loginType = "login"' class="login-list__item">Login</li>
						<li :class='{active: loginType === "register"}' @click='loginType = "register"' class="login-list__item">Register</li>
					</ul>
					<template v-if="loginType === 'login'">
					      <LogIn />
				    </template>
				    <template v-else="">
					      <Register />
				    </template>
				    <span class="close" @click='showForm = false'>&times;</span>
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
								<img :src="item.img" :alt='item.name'>
							</div>
							<!-- /.order-preview__item_thumb -->
							<div class="order-preview__item_content">
								<div class="order-preview__info">
									<div class="product-name">{{item.name}}</div>
									<!-- /.product-name -->
									<div class="product-quantity">Quantity: {{item.quantity}}</div>
									<!-- /.product-quantity -->
									<div class="product-price">{{item.price}}</div>
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
  		showForm: false,
  		showOrderPreview: false,
  		loginType: 'login',
  		cart: this.$store.state.cart,
  		countItems: this.$store.state.countItems,
  	}
  },
  methods: {
  	removeFromCart (index) {
  		this.$store.commit('removeFromCart', {index});
  	}
  },
  computed: {
  	countTotal () {
  		return this.$store.getters.countTotalOrder;
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
