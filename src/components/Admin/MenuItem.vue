<template>
	<div class="wrapper">
		<Banner class='home-banner' text='Add item'/>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<div class="menu-item" v-for='(dish,index) in dishes' :key='index'>
						<div v-if='dish.id === proId'>
							<div class="menu-item__title">
								Edit dish: {{dish.name}}
							</div>
							<!-- /.menu-item__title -->
							<form action="#" class="menu-item__form">
							    <div class="row">
							        <div class="col-md-12 col-12">
							        	<label for='name'>
							        		Dish name:	
							        	</label>                                 
							            <input v-model='dish.name' type="text" id="name" placeholder="Name">
							        </div>
							        <div class="col-12 col-md-6">
							        	<label for="price">Dish price, $</label>
							            <input placeholder="Price" id="price" v-model='dish.price' type="text">
							        </div>
							        <div class="col-12 col-md-6">
							        	<label for="weight">Weight, g</label>
							            <input v-model='dish.weight' placeholder="Weight" type="text">
							        </div>
							        <div class="col-12">
							        	<label for="excerpt">Short description</label>
							            <textarea class="excerpt" maxlength="100" v-model='dish.excerpt' placeholder="Short description" type="text"></textarea>
							        </div>
							        <div class="col-12">
							        <label for="include">Ingradients</label>                              
							            <input v-model='dish.include' id="include" type="text" placeholder="Components">
							        </div> 
							        <div class="col-md-12 col-12">
							        	<label for="descr">Dish description</label>                             
							            <textarea class="descr" maxlength="500" v-model='dish.descr' id="descr" placeholder="Description"></textarea>
							        </div>                       
							    </div>
							</form>
							<div @click='goBack' class="menu-item__save">
								Save
							</div>
							<!-- /.menu-item__save -->
						</div>
					</div>
					<!-- /.menu-item -->
				</div>
				<!-- /.col-lg-8 offset-lg-4 -->
			</div>
			<!-- /.row -->
			
		</div>
		<!-- /.container -->
	</div>
	<!-- /.wrapper -->
	
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
			goBack () {
		      window.history.length > 1
		        ? this.$router.go(-1)
		        : this.$router.push('/')
		    }
		},
		components: {
			Banner
		}
	}
</script>
<style lang="sass">
	@import "../../assets/sass/menuChange"
</style>