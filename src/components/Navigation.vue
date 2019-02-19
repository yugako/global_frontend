<template>
	<div class="container mb-5">
		<div class="wrapper-nav pt-2 pb-2 pl-5 pr-5">
			<div class="row justify-content-between flex-lg-row flex-column align-items-center">
			<div class="logo mb-2 mb-lg-0">
				<router-link to='/'>
					<img src="../assets/img/logo/3.png" alt="">
				</router-link>
				
			</div>
			<nav v-if='!logged' class="nav mb-2 mb-lg-0">
				<router-link class='nav-link' exact active-class='active' to='/'>
					Home
				</router-link>
				<router-link class='nav-link' active-class='active' to='/menu'>
					Menu
				</router-link>
				<router-link class='nav-link' active-class='active' to='/cart'>
					Cart
				</router-link>
			</nav>
			<div class="account mb-2 mb-lg-0">
				<template v-if='logged'>
					<a class="account__link" @click='logout()'>
						LogOut
						<img class="account__image" src="../assets/img/icons/sign-out.svg" alt="">
					</a>
				</template>
				<template v-else>
					<a class="account__link" @click='showForm()'>
						<img class="account__image" src="../assets/img/icons/user.svg" alt="">
					</a>
					<a class="account__link" @click='showOrderPreview = true'>
						<img class="account__image" src="../assets/img/icons/cart.svg" alt="">
						<span class="count">{{this.$store.state.cart.countItems}}</span>
					</a>
				</template>
				
				
				
			</div>
			<!-- /.account -->
		</div>
		<!-- /.row -->
		</div>
		<!-- /.wrapper-nav -->
		<!-- User login/register -->
		<overlayLogin />
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
						<div class="cart-error empty" v-if='cart.length === 0'>
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
						<span class="total-price">{{countTotalOrder}}</span>
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
import overlayLogin from '@/components/Signin/overlayLogin.vue';

export default {
  name: "navigation",
  beforeCreate: function() {
    this.$options.computed = {
       logged () {
       		return this.$store.getters.logged;
       },
       countTotalOrder () {
  		return this.$store.getters.countTotalOrder;
  	},
    }
  },
  data () {
  	return {
  		showOrderPreview: false,
  		cart: this.$store.state.cart.cart,
  	}
  },
  methods: {
  	removeFromCart (index) {
  		this.$store.commit('removeFromCart', {index});
  	},
  	showForm () {
  		this.$store.commit('showForm');
  	},
  	logout () {
  	    localStorage.removeItem('jwtToken');
  	    this.$store.commit('isLogOut');
  	    this.$router.push({
  	      name: 'home'
  	    })
  	  }
  },
  components: {
    overlayLogin
  }
};
</script>
<style lang="sass">
	@import '../assets/sass/nav'
</style>
