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
	body
		position: relative
	.overlayLogin, .overlayPreview
		position: fixed
		top: 0
		left: 0
		background-color: rgba(0,0,0,.6)
		width: 100%
		height: 100%
		display: flex
		justify-content: center
		z-index: 999999999
		align-items: center
		
	.overlayPreview
		justify-content: flex-end
	.login
		&-list
			display: flex
			list-style: none
			padding-left: 0
			margin-bottom: 40px
			&__item
			    font-weight: 700
			    font-weight: bold
			    color: #222
			    font-size: 24px
			    cursor: pointer
			&__item + &__item::before
				content: '-'
				padding: 0px 10px
				color: #222
	.order-preview
		width: 476px
		height: 100%
		padding: 25px 35px
		padding-top: 60px
		top: 0
		right: 0
		background-color: #fafafa
		position: fixed
		overflow-y: auto
		z-index: 99999999
		&__title
			color: #d50c0d
			font-family: Open Sans
			font-size: 22px
			margin-bottom: 10px
			text-transform: uppercase
			font-weight: 500
		&__items
			padding-bottom: 20px
			border-bottom: 1px solid #aaaaaa
		&__item
			display: flex
			align-items: center

			border-bottom: 1px solid #f0f0f0
			padding-top: 15px
			padding-bottom: 15px
			&_thumb
				img
					width: 100px
					height: auto
			&_content
				padding-left: 30px
				flex-basis: 80%
				display: flex
				justify-content: space-between
				align-items: flex-start
				.product-name
					font-weight: 500
					margin-bottom: 0
					font-family: "Open Sans", sans-serif
					font-style: normal
					font-size: 15px
					color: #444
				.product-quantity
				    font-size: 12px
				    line-height: 24px
				    font-family: "Open Sans", sans-serif
				.product-price
					font-weight: 500
					font-family: "Open Sans", sans-serif
					color: #d50c0d
			&_remove
				width: 15px
				height: 15px
				cursor: pointer
		&__buttons
			margin-top: 40px
		&__button
			
		    font-weight: 700
		    text-align: center
		    text-transform: uppercase
		    font-family: 'Open Sans'
		    display: block
		    margin-bottom: 20px
		    width: 100%
		    &:hover
		    	color: #444
		    	background-color: #ccc
		.total
			display: flex
			justify-content: space-between
			font-size: 24px
			color: black
			margin-top: 7px
			font-weight: 700				
	.login-form
		background-color: #e3e3e3
		padding: 60px
		max-width: 475px
		width: 100%
		position: relative
	.food__btn
	    border-radius: 5px
	    color: #fff
	    display: inline-block
	    font-family: "Alegreya", serif
	    font-size: 18px
	    line-height: 45px
	    padding: 0 35px
	    text-transform: capitalize
	    position: relative
	    background-color: #d50c0d
	    border: none
	.single-input
		input
		    border: 1px solid #aaaaaa
		    background: transparent
		    font-size: 14px
		    font-weight: 400
		    color: #333
		    max-width: 320px
		    width: 100%
		    padding: 10px 30px
		    display: block
		    border-radius: 100px
		    font-family: 'Open Sans', sans-serif
	.close
		position: absolute
		top: 0px
		right: 20px
		cursor: pointer
		font-size: 40px	
	.active
		color: #d50c0d
	.single-input
		 margin-bottom: 10px
	.container
		padding-top: 15px
		padding-bottom: 15px
	.nav
		&__list
			display: flex
			justify-content: center
			margin-bottom: 0
			list-style: none
		&__item
			margin: auto 10px
		&__link
			color: #444
			font-size: 16px
			font-family: "Open Sans", sans-serif
			&:hover
				color: #d50c0d
	.account
		&__image
			width: 15px
			height: 15px
		&__link
			position: relative
			cursor: pointer
		&__link + &__link::before
			content: '|'
			padding: 0px 10px
			color: #444
		.count
			position: absolute
			font-size: 12px
			top: -15px
			right: -17px
			background-color: #d50c0d
			padding: 2px 9px
			border-radius: 50%
			color: #fff
	.slide-fade-enter-active 
	  	transition: all .3s ease
	
	.slide-fade-leave-active 
	  	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
	
	.slide-fade-enter, .slide-fade-leave-to
	  	transform: translateX(10px)
	  	opacity: 0
	
</style>
