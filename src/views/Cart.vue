<template>
	<section class="cart">
		<Banner class='cart-banner' text='Cart Page' />
		<!-- /.cart-header -->
		<div class="container">
		    <div class="row">
		        <div class="col-md-12 col-sm-12 ol-lg-12">
		            <form action="#">               
		                <div class="table-content table-responsive">
		                    <table>
		                        <thead>
		                            <tr class="title-top">
		                                <th class="product-thumbnail">Image</th>
		                                <th class="product-name">Product</th>
		                                <th class="product-price">Price</th>
		                                <th class="product-quantity">Quantity</th>
		                                <th class="product-subtotal">Total</th>
		                                <th class="product-remove">Remove</th>
		                            </tr>
		                        </thead>
		                        <tbody>
		                        	
		                            <tr v-for='(item, index) in cart' :key='index'>
		                                <td class="product-thumbnail">
		                                	<a href="#">
		                                		<img :src="item.img" :alt="item.title" />
		                                	</a>
		                                </td>
		                                <td class="product-name">
		                                	<a href="#">{{item.name}}</a>
		                                </td>
		                                <td class="product-price">
		                                	<span class="amount">{{item.price}}$</span>
		                                </td>
		                                <td class="product-quantity">
		                                	<input min="0" type="number" v-model='item.quantity' />
		                                </td>
		                                <td class="product-subtotal">{{countTotal(index)}}</td>
		                                <td class="product-remove" @click='removeFromCart(index)'>
		                                	<span class="button">Remove</span>
		                                </td>
		                            </tr>
		                        </tbody>
		                    </table>
		                    <div v-if='cart.length === 0'>
		                        <span>No items in cart</span>
		                    </div>
		                </div>
		            </form> 
		         
		        </div>
		    </div>
		    <div class="row">
		        <div class="col-lg-6 offset-lg-6">
		            <div class="cartbox__total__area">
		                <div class="cartbox__total__amount">
		                    <span>Grand Total</span>
		                    <span>{{countTotalOrder}}</span>
		                </div>
		                <div class="cartbox__order">
		                	<router-link to='/payment'>Take order</router-link>
		                </div>
		                <!-- /.cartbox__order -->
		            </div>
		        </div>
		    </div>
		</div>  
	</section>
	<!-- /.cart -->
</template>
<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";

export default {
  name: "cart",
  data () {
  	return {
  		cart: this.$store.state.cart,
  	}
  },
  methods: {
  	countTotal (i) {
  		return this.$store.getters.countTotal(i);
  	},
  	removeFromCart (index) {
  		this.$store.commit('removeFromCart', {index});
  	}
  },
  computed: {
  	countTotalOrder () {
  		return this.$store.getters.countTotalOrder;
  	},	
  },
  components: {
    Banner
  }
};
</script>
<style lang="sass">
	@import '../assets/sass/cart'
</style>