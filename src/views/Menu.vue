<template>
  <section class="menu">
  	<Banner class='menu-banner' text='MENU LIST VIEW' />
    <!-- /.menu-header -->
    <div class="menu-list">
    	<div class="container">
    		<div class="menu-item" v-for='dish in dishes'>
    			<div class="menu-item__img">
    				<img :src="dish.img" :alt="dish.name">
    			</div>
    			<!-- /.menu-list__img -->
    			<div class="menu-item__content">
    				<div class="menu-item__header">
    					<div class="menu-item__title">
                  <h3 @click='goToDetail(dish.id)'>{{dish.name}}</h3>
    					</div>
    					<!-- /.menu-item__title -->
    					<div class="menu-item__price">
    						{{dish.price}}
    					</div>
    					<!-- /.menu-item__price -->
    				</div>
    				<!-- /.menu-item__header -->
    				<div class="menu-item__descr">
    					{{dish.descr}}
    				</div>
    				<!-- /.menu-item__descr -->
    				<div class="menu-item__order">
    					<a class="menu-item__order_link" @click='goToDetail(dish.id)'>
    						Order now
    					</a>
    				</div>
    				<!-- /.menu-item__order -->
    			</div>
    			<!-- /.menu-list__content -->
    		</div>
    		<!-- /.menu-list__item -->
    	</div>
    	<!-- /.container -->
    	
    </div>
    <!-- /.menu-list -->
  </section>
</template>
<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";

export default {
  name: "menu",
  data () {
  	return {
        dishes: this.$store.state.dishes
  	}
  },
  methods: {
    goToDetail(dishId) {
        this.$router.push({name:'detail',params:{id:dishId}})
    }
  },
  components: {
    Banner
  }
};
</script>
<style lang="sass">
	.menu
		&-banner
			background-image: url('../assets/img/menu-list/banner.jpg')
			span
				color: #444!important
		&-list
			margin-top: 30px
		&-item
			display: flex
			justify-content: space-between
			align-items: center
			margin-top: 15px
			margin-bottom: 15px
			&__content
				padding: 18px
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
			&__header
				display: flex
				justify-content: space-between
				align-items: center
				border-bottom: 1px dotted #d50c0d
			&__title
				h3
					font-family: 'Alegreya', serif
					font-weight: bold
					font-size: 36px
					color: #444
					&:hover
						color: #d50c0d
			&__price
				color: #d50c0d
				font-family: "Alegreya", serif
				font-size: 50px
				font-weight: 700
			&__descr
				color: #959595
				margin-top: 15px
				font-size: 14px
				margin-bottom: 20px
			&__order
				&_link
					font-family: "Alegreya", serif
					font-size: 18px
					color: #444!important
					padding: 10px 15px
					background-color: #f2f2f2
					font-weight: bold
					border-radius: 5px
					transition: 0.6s
					&:hover
						background-color: #d50c0d
						color: #fff!important
						transition: 0.6s
                        
</style>