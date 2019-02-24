<template>
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
			            <tr v-for='(dish, index) in dishes' :key='dish._id'>
			                <td class="product-thumbnail">
			                	<img :src="dish.img" alt="product img" />
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
</template>
<script>
	import axios from 'axios';

	export default {
		name: 'MenuTable',
		beforeCreate: function() {
		  this.$options.computed = {
			 showDishes () {
			 	return this.$store.getters.ShowDishes
			 }
		  }
		},
		created () {
			if(this.$store.getters.logged) {
				axios.get(this.$store.state.BASE_DISH_URL)
				.then(response => {
					this.dishes = response.data;
				})
				.catch(e => {
					console.log(e);
					if (e.response.status === 401) {
						this.$router.push({
						    name: 'home'
						});
						this.$store.commit('showForm');
						this.$store.commit('showLogin');
					}
				})
			} else {
				this.$router.push({
				    name: 'home'
				});
				this.$store.commit('showForm');
				this.$store.commit('showLogin');
			}
			
		},
		data() {
			return {
				dishes: []
			}
		},
		methods: {
			goToEditDish(dishId) {
			    this.$router.push({name:'change',params:{id:dishId}})
			},
			addNewItem() {
				this.$router.push({ name: 'add'}) 
			},
			removeFromStore (index) {
				this.$store.dispatch('deleteDishes', index);
				this.dishes = this.$store.getters.Dishes;
			},
		}
	}
</script>