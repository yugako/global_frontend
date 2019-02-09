<template>
	<section class="menu-details">
		<Banner text='MENU DETAILS' class='details-banner' />
	    <!-- /.menu-header -->
    	<div class="container">
    		<div class="menu-detail" v-for='(dish,index) in dishes' :key='index'>
    			<div v-if='dish.id === proId'>
		    		<div class="row align-items-center">
		    			<div class="col-lg-4">
		    				<img :src="dish.img"  alt="" class="menu-detail__photo img-responsive">
		    			</div>
		    			<!-- /.col-lg-4 -->
		    			<div class="col-lg-8">
		    				<div class="menu-detail__title">{{dish.name}}</div>
		    				<!-- /.menu-detail__title -->
		    				<div class="menu-detail__price">{{dish.price}}</div>
		    				<!-- /.menu-detail__price -->
		    				<div class="menu-detail__excerpt">{{dish.excerpt}}</div>
		    				<!-- /.menu-detail__descr -->
		    				<div class="menu-detail__components">
		    					Food includes: {{dish.include.join(', ')}}
		    				</div>
		    				<!-- /.menu-detail__components -->
		    				<div class="menu-detail__weight">Chunk weight: 200 g</div>
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
		    			{{dish.descr}}
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
				proId:this.$route.params.id,
				dishes: this.$store.state.dishes,
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

				let result = this.$store.state.cart.find(item => item.name === dish.name);

				if(result) {
					return true;
				} else {
					return false;
				}
			}
		},
		components: {
			Banner
		}
	}
</script>
<style lang="sass">
	.details-banner
		background-image: url('../assets/img/menu-list/banner.jpg')
		span
			color: #444!important
	.menu
		&-detail
			margin-top: 50px
			margin-bottom: 50px
			&__title
				color: #3a3a3a
				font-family: Open Sans
				font-size: 26px
				margin-bottom: 10px
				text-transform: uppercase
				font-weight: bold
			&__price
				color: #d50c0d
				font-size: 24px
				font-weight: 700
			&__excerpt, &__description
				color: #959595
			    font-size: 14px
			    line-height: 30px
			    margin-top: 23px
			    text-align: justify
			&__description
				margin-top: 15px

			&__type, &__components, &__weight
				color: #959595
				display: block
				font-size: 14px
				font-weight: 700
				margin-top: 18px
				margin-bottom: 10px
			&__actions
				display: flex
				justify-content: space-between
				.cart-button
				    border-radius: 5px
				    font-family: "Alegreya", serif
				    font-size: 18px
				    height: 45px
				    line-height: 45px
				    padding: 0 22px
				    text-transform: capitalize
				    color: #fff
				    border: none
				    background-color: #d50c0d
				    cursor: pointer
				&_controls
					display: flex
					.quantity
						border: 1px dashed #ebebeb
						color: #d50c0d
						font-size: 18px
						font-weight: 700
						height: 45px
						position: relative
						text-align: center
						width: 40px
						margin: auto 15px
					.inc, .dec
						width: 40px
						height: 45px
						text-align: center
						line-height: 40px
						border: 1px dashed #ebebeb
						cursor: pointer
</style>