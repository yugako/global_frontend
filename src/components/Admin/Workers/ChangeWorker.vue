<template>
	<div class="wrapper">
		<Banner class='home-banner' text='Change dish'/>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<div class="menu-item" v-for='(worker,index) in workers' :key='index'>
						<div v-if='worker.id === proId'>
							<div class="menu-item__title">
								Edit worker's data: {{worker.name}}
							</div>
							<!-- /.menu-item__title -->
							<EditWorker :worker='worker' />
							
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
	import EditWorker from "@/components/Admin/Workers/EditWorker.vue";
	export default {
		data () {
			return {
				proId: this.$route.params.id,
				workers: this.$store.state.workers,
				
			}
		},
		
		components: {
			Banner,
			EditWorker
		}
	}
</script>
<style lang="sass">
	@import "../../../assets/sass/menuChange"
</style>