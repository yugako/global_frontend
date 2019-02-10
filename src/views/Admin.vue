<template>
	<section class="admin">
		<Banner text='Admin page' class='admin-banner' />
		<div class="container">
			<div class="admin-content">
				<div class="admin-content__workers">
					<h1 @click='showWorkers = !showWorkers' class="admin-content__title">Workers List</h1>
					<!-- /.admin-content__title -->
					<transition name="slide-fade">
						<div v-if='showWorkers' class="wrapper">
							<div class="table-content table-responsive">
							    <table>
							        <thead>
							            <tr class="title-top">
							                <th>Name</th>
							                <th>Password</th>
							             	<th>Actions</th>
							            </tr>
							        </thead>
							        <tbody>
							            <tr v-for='(worker, index) in workers' :key='index'>
							                <td class="worker-name">
							                	{{worker.name}}
							                </td>
							                <td class="worker-password">
							                	{{worker.password}}
							                </td>
							                <td class="actions">
							           			<a href="#" class="actions-button edit">Edit</a>
							                	<a href="javascript:void(0)" @click='removeFromStore(index)' class="actions-button remove">Remove</a>
							                </td>
							            </tr>
							            
							        </tbody>
							    </table>
							</div>
							<div class="admin-content__add">
								<button class="admin-content__add_button">Add worker</button>
							</div>
							<!-- /.admin-content__add -->
						</div>
						<!-- /.wrapper -->
					</transition>
				</div>
				<!-- /.admin-content__workers -->
				<div class="admin-content__dishes">
					<h1 @click='showDishes = !showDishes' class="admin-content__title">Menu List</h1>
					<!-- /.admin-content__title -->
					<transition name="slide-fade">
						<div v-if='showDishes' class="wrapper">
							<div class="table-content table-responsive">
							    <table>
							        <thead>
							            <tr class="title-top">
							                <th class="product-thumbnail">Image</th>
							                <th class="product-name">Name</th>
							                <th class="product-price">Price</th>
							                <th class="product-descr">Short description</th>
							                <th class="product-remove">Actions</th>
							            </tr>
							        </thead>
							        <tbody>
							            <tr v-for='(dish, index) in dishes' :key='index'>
							                <td class="product-thumbnail">
							                	<img :src="dish.img" alt="product img" />
							                </td>
							                <td class="product-name">
							                	{{dish.name}}
							                </td>
							                <td class="product-price">
							                	<span class="amount">{{dish.price}}$</span>
							                </td>
							               
							                <td class="product-excerpt">{{dish.excerpt}}</td>
							                <td class="actions">
							           			<span class="actions-button edit" @click='goToEdit(dish.id)'>Edit</span>
							                	<span @click='removeFromStore(index)' class="actions-button remove">Remove</span>
							                </td>
							            </tr>
							        </tbody>
							    </table>
							</div>
							<div class="admin-content__add">
								<button @click='addNew' class="admin-content__add_button">Add dish</button>
							</div>
							<!-- /.admin-content__add -->
						</div>
						<!-- /.wrapper -->
					</transition>
				</div>
				<!-- /.admin-content__dishes -->
			</div>
			<!-- /.admin-content -->
		</div>
		<!-- /.container -->
		
	</section>
</template>
<script>
	import Banner from "@/components/Banner.vue";
	import ChangeMenu from "@/components/Admin/Menu/ChangeMenu.vue";
	export default {
		data () {
			return {
				showWorkers: false,
				showDishes: false,
				dishes: this.$store.state.dishes,
				workers: this.$store.state.workers
			}
		},
		methods: {
			goToEdit(dishId) {
			    this.$router.push({name:'change',params:{id:dishId}})
			},
			addNew() {
				this.$router.push({ name: 'add'}) 
			},
			removeFromStore (index) {
			  	this.$store.commit('removeFromStore', {index});
			}
		},
		components: {
			Banner,
			ChangeMenu
		}
	}
</script>
<style lang="sass">
	@import '../assets/sass/admin'
</style>