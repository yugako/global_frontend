<template>
	<transition name="slide-fade">
		<div class="overlayPreview">
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
							
							<img @click='removeFromCart(index)' src="../../assets/img/icons/trash.svg" class="order-preview__item_remove">
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
					<router-link :class='{disabled: isEmpty}' to='/payment'  class="order-preview__button food__btn">Checkout</router-link>
					<!-- /.checkout -->
				</div>
				<!-- /.order-preview__buttons -->
				
			    <span class="close" @click='hidePreview()'>&times;</span>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		name: 'cartPreview',
		beforeCreate: function() {
		  this.$options.computed = {
		     countTotalOrder () {
				return this.$store.getters.countTotalOrder;
			},
		  }
		},
		data() {
			return {
				cart: this.$store.state.cart.cart,
			}
		},
		methods: {
			removeFromCart (index) {
				this.$store.commit('removeFromCart', {index});
			},
			hidePreview () {
		  		this.$store.commit('hideCartPreview');
		  	},
		},
		computed: {
			isEmpty () {
				return this.cart.length === 0 ? true : false;
			}	
		},
	}
</script>