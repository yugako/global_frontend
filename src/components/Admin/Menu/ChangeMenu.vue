<template>
	<div class="wrapper">
		<Banner class='home-banner' text='Change dish'/>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<div class="menu-item" v-for='(dish,index) in dishes' :key='index'>
						<div v-if='dish.id === proId'>
							<div class="menu-item__title">
								Edit dish: {{dish.name}}
							</div>
							<!-- /.menu-item__title -->
							<EditItem :dish='dish' />
							
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
	import EditItem from "@/components/Admin/Menu/EditItem.vue";
	export default {
		data () {
			return {
				proId: this.$route.params.id,
				dishes: this.$store.state.dishes,
			}
		},
		components: {
			Banner,
			EditItem
		}
	}
</script>
<style lang="sass">
	@import "../../../assets/sass/menuChange"
</style>