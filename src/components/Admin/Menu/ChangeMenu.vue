<template>
	<div class="wrapper">
		<Banner class='home-banner' text='Change dish'/>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<div class="menu-item" v-for='(dish,index) in dishes' :key='index'>
						<div v-if='dish.title === friendlyTitle(proId)'>
							<div class="menu-item__title">
								Edit dish: {{dish.title}}
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
				proId: this.$route.params.title,
				dishes: this.$store.state.dishes.dishes,
			}
		},
		methods: {
			friendlyTitle(value) {
				value = value.replace(/_/g, " ");
				return value;
			},
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