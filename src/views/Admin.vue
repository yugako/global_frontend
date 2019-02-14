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
							            <tr v-for='(worker,index) in workers' :key='index'>
							                <td class="worker-name">
							                	{{worker.name}}
							                </td>
							                <td class="worker-password">
							                	{{worker.password}}
							                </td>
							                <td class="actions">
							           			<span @click='goToEditWorker(worker.id)' class="actions-button button">Edit</span>

							                	<span @click='removeFromWorkers(index)' class="actions-button button">Remove</span>
							                </td>
							            </tr>
							            
							        </tbody>
							    </table>
							</div>
							<div class="admin-content__add">
								<button @click='addNewWorker' class="admin-content__add_button">Add worker</button>
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
							            <tr v-for='(dish, index) in dishesList' :key='dish._id'>
							                <td class="product-thumbnail">
							                	<img src="@/assets/img/menu-list/placeImg.jpg" alt="product img" />
							                </td>
							                <td class="product-name">
							                	{{dish.title}}
							                </td>
							                
							                <td class="product-price">
							                	<span class="amount">{{dish.price}}$</span>
							                </td>
							               
							                <td class="product-excerpt">{{dish.excerpt}}</td>
							                <td class="actions">
							           			<span class="actions-button edit" @click='goToEditDish(dish._id)'>Edit</span>
							                	<span @click='removeFromStore(dish._id)' class="actions-button remove">Remove</span>
							                </td>
							            </tr>
							        </tbody>
							    </table>
							</div>
							<div class="admin-content__add">
								<button @click='addNewItem' class="admin-content__add_button">Add dish</button>
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
	import axios from 'axios';
	import Banner from "@/components/Banner.vue";
	
	export default {
		beforeCreate: function() {
		  this.$options.computed = {
		     dishesList(){
			     return this.$store.getters.Dishes
			 }
		  }
		},
		data () {
			return {
				showWorkers: false,
				showDishes: true,
				workers: this.$store.state.workers
			}
		},
		methods: {
			goToEditDish(dishId) {
			    this.$router.push({name:'change',params:{id:dishId}})
			},
			goToEditWorker(id) {
			    this.$router.push({name:'edit',params:{id:id}})
			},
			addNewItem() {
				this.$router.push({ name: 'add'}) 
			},
			addNewWorker() {
				this.$router.push({ name: 'add_worker'}) 
			},
			removeFromStore (index) {
				this.$store.dispatch('deleteDishes', index)
			},
			removeFromWorkers (index) {
			  	this.$store.commit('removeFromWorkers', {index});
			},
		},
		components: {
			Banner,
		}
	}
</script>
<style lang="sass">
	@import '../assets/sass/admin'
</style>