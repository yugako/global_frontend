<template>
	<section class="menu-details">
		<Banner text='MENU DETAILS' class='details-banner' />
	    <!-- /.menu-header -->
    	<div class="container">
    		<div class="menu-detail" v-for='(dish,index) in dishesList' :key='index'>
    			<div v-if='dish._id === proId'>
		    		<div class="row align-items-center">
		    			<div class="col-lg-4">
		    				<img :src="dish.img"  alt="" class="menu-detail__photo img-responsive">
		    			</div>
		    			<!-- /.col-lg-4 -->
		    			<div class="col-lg-8">
		    				<div class="menu-detail__title">{{dish.title}}</div>
		    				<!-- /.menu-detail__title -->
		    				<div class="menu-detail__price">{{dish.price}}$</div>
		    				<!-- /.menu-detail__price -->
		    				<div class="menu-detail__excerpt">{{dish.excerpt}}</div>
		    				<!-- /.menu-detail__descr -->
		    				<div class="menu-detail__components">
		    					Food includes: {{dish.ingradients}}
		    				</div>
		    				<!-- /.menu-detail__components -->
		    				<div class="menu-detail__weight">Chunk weight: {{dish.weight}} g</div>
		    				<!-- /.menu-detail__weight -->
		    				<div class="menu-detail__actions">
		    					<div class="menu-detail__actions_controls">
		    						<div class="dec" @click='dish.quantity == 0 ? dish.quantity = 0 : dish.quantity--'>-</div>
		    						<input type="text" v-model='dish.quantity' class="quantity">
		    						<div class="inc" @click='dish.quantity++'>+</div>
		    					</div>
		    					<!-- /.menu-detail_cart_controls -->
		    					<button @click='addToCart(dish,index)' class="cart-button">Add to cart</button>
		    				</div>
		    				<!-- /.menu-detail__cart -->
		    			</div>
		    			<!-- /.col-lg-8 -->
		    		</div>
		    		<!-- /.row -->
		    		<div class="menu-detail__description">
		    			{{dish.description}}
		    		</div>
		    		<!-- /.menu-detail__description -->
    			</div>
	    		
    		</div>
    		<!-- /.menu-detail -->
    	</div>
    	<!-- /.container -->
    </section>
    <!-- /.menu-details -->
    
</template>
<script>
	import Banner from "@/components/Banner.vue";

	export default {
		data () {
			return {
				proId:this.$route.params.id
			}
		},
		methods: {
			addToCart (dish) {
				
				if(this.checkExistItem(dish)) {
					dish.quantity++;
				} else {
					this.$store.commit('addToCart', {dish});
				}
			},
			checkExistItem (dish) {

				let result = this.$store.state.cart.cart.find(item => item.title === dish.title);

				if(result) {
					return true;
				} else {
					return false;
				}
			}
		},
		computed : {
		  dishesList(){
		     return this.$store.getters.Dishes
		  }
		},
		components: {
			Banner
		}
	}
</script>
<style lang="sass">
	@import '../assets/sass/details'
</style>