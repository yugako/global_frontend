<template>
	<section class="admin">
		<Banner :text='setMessage' class='admin-banner' />
		<div class="container">
			<div class="admin-content">
				<div class="admin-content__workers">
					<h1 @click='toggleWorkersList' class="admin-content__title">Workers List</h1>
					<!-- /.admin-content__title -->
					<WorkersTable />
				</div>
				<!-- /.admin-content__workers -->
				<div class="admin-content__dishes">
					<h1 @click='toggleDishesList' class="admin-content__title">Menu List</h1>
					<!-- /.admin-content__title -->
					<MenuTable />
				</div>
				<!-- /.admin-content__dishes -->
			</div>
			<!-- /.admin-content -->
		</div>
		<!-- /.container -->
		
	</section>
</template>
<script>
	import Banner from "@/components/Banner";
	import MenuTable from "@/components/Admin/Menu/MenuTable";
	import WorkersTable from "@/components/Admin/Workers/WorkersTable";

	export default {
		name: 'Admin',
		beforeCreate: function() {
		  this.$options.computed = {
		     userName() {
				return this.$store.getters.UserName;
			},
			setMessage () {
				return `Welcome, ${this.userName}`;
			}
		  }
		},
		data() {
			return {}
		},
		methods: {
			toggleDishesList() {
				this.$store.commit('toggleDishesList');
			},
			toggleWorkersList() {
				this.$store.commit('toggleWorkersList');
			}
		},
		computed: {
			
			
		},
		components: {
			Banner,
			MenuTable,
			WorkersTable
		}
	}
</script>
<style lang="sass">
	@import '../assets/sass/admin'
</style>