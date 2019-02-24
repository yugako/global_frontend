<template>
	<section class="cart">
		<Banner class='cart-banner' text='Cart Page' />
		<!-- /.cart-header -->
		<div class="container">
		    <div class="row">
		        <div class="col-md-12 col-sm-12 ol-lg-12">	                           
	                <CartTable />
		        </div>
		    </div>
		    <div class="row">
		        <div class="col-lg-6 offset-lg-6">
		            <div class="cartbox__total__area">
		                <div class="cartbox__total__amount">
		                    <span>Grand Total</span>
		                    <span>{{totalPrice}}</span>
		                </div>
		                <div class="cartbox__order">
		                	<router-link :class='{disabled: isEmpty}' to='/payment'>Take order</router-link>
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
import CartTable from "@/components/Cart/CartTable.vue";

export default {
  name: "cart",
  computed: {
  	totalPrice () {
  		return this.$store.getters.countTotalOrder;
  	},
  	isEmpty () {
  		return this.$store.state.cart.cart === 0 ? true : false;
  	}	
  },
  components: {
    Banner,
    CartTable
  }
};
</script>
<style lang="sass">
	@import '../assets/sass/cart'
</style>