<template>
	<section class="stuff">
		<Banner :text='setMessage' class='stuff-banner' />
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-9">
					<div class="stuff-queue">
						<div class="stuff__title">
							Order queue
						</div>
						<!-- /.stuff-queue__title -->
						<div class="table-content table-responsive">
						    	<table>
						    		<thead>
						                <tr class="title-top">
						                	<th>Order <br> number</th>
						                    <th>Name</th>
						                    <th>Worker</th>
						                    <th>Order <br> date</th>
						                    <th>Status</th>
						                    <th>Amount</th>
						                    <th>Total <br> price</th>
						                 	<th>Actions</th>
						                </tr>
						            </thead>
						            <tbody>
						            	<tr v-for='dish in filtered' :key='dish._id'>
						            		<td class="queue-name">
						                    	{{dish.number}}
						                    </td>
						    				<td class="queue-name">
						                    	{{dish.title}}
						                    </td>
						                    <td class="queue-worker">
						    	                <SelectWorker @select='getWorker' :item='dish' />
						                    </td>
						    			    <td class="queue-worker">
						    	                {{dish.createdAt | moment("dd, h:mm:ss a")}}
						                    </td>
						                    <td class="queue-status">
						                    	{{dish.status}}
						                    </td>
						                    <td class="queue-status">
						                    	{{dish.amount}}
						                    </td>
						                    <td class="queue-status">
						                    	{{dish.price}}
						                    </td>
						                    <td class="actions">
						                    	<button @click='manageState(dish)' class="button">{{dish.action}}</button>
						                    </td>
						    				
						    			</tr>
						    			<tr>
						    				<td class='empty' v-if='filtered.length === 0' colspan="7">No dishes in queue</td>
						    			</tr>
						            </tbody>
						    		

						    	</table>
						</div>
					</div>
					<!-- /.stuff-queue -->
				</div>
				<!-- /.col-12 col-lg-8 -->
				<div class="col-12 col-lg-3">
					<aside class="stuff-filters">
						<div class="stuff__title">
							Orders filters
						</div>
						<!-- /.stuff__title -->
						<div class="stuff-filters__state">
							<h3>Sort by status: </h3>
							<ul class="stuff-filters__list state">
								<li class="stuff-filters__item" @click='filterByStatus()'>All</li>
								<li class="stuff-filters__item" @click='filterByStatus("unprocessed")'>Unprocessed</li>
								<li class="stuff-filters__item" @click='filterByStatus("Processing")'>Processing</li>
								<li class="stuff-filters__item" @click='filterByStatus("Done")'>Completed</li>
							</ul>
						</div>
						<!-- /.stuff-filters__state -->
						<div class="stuff-filters__time">
							<h3>Sort by date: </h3>
							<ul class="stuff-filters__list time">
								<li class="stuff-filters__item" @click='sortByAsc()'>Newest</li>
								<li class="stuff-filters__item" @click='sortByDesc()'>Oldest</li>
							</ul>
						</div>
						<!-- /.stuff-filters__state -->
					</aside>
				</div>
				<!-- /.col-12 col-lg-4 -->
			</div>
			<!-- /.row -->
		</div>
		<!-- /.container -->
	</section>
</template>
<script>
	// @ is an alias to /src
	import Banner from "@/components/Banner.vue";
	import SelectWorker from "@/components/Stuff/SelectWorker.vue";
	import axios from 'axios';
	export default {
	  	name: "stuff",
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
	  	created () {
	  		if(this.$store.getters.logged) {
	  			axios.get(this.$store.state.BASE_ORDERS_URL)
	  			.then(response => {
	  				this.orders = response.data;
	  				this.filtered = this.orders.slice(0, this.orders.length);
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
	  	beforeRouteLeave(to, from, next) {
	  		if(!this.$store.state.login.logged) {
	  			next();
	  		} else {
	  			next(false);
	  		}
	  		
	  	},
	  	data () {
	  		return {
	  			orders: [],
		  		filtered: [],
		  		id: '',
		  		title: '',
		  		number: '',
		  		price: '',
		  		status: '',
		  		action: '',
		  		worker: '',
		  		
	  		}
	  	},
	  	methods: {
	  		updateOrder (data) {
		        this.$store.dispatch('updateOrder', {
		        	id: data._id,
		        	title: data.title,
		        	number: data.number,
		        	price: data.price,
		 			status: data.status,
			    	action: data.action,
			    	worker: this.worker,
		 		})
		 		
		  	},
		  	manageState (dish) {
		  		switch (dish.action) {
		  			case 'Take in order':
		  				dish.status = 'Processing';
		  				dish.action = 'Done';
		  				this.updateOrder(dish);
		  				break;
	  				case 'Done':
		  				dish.status = 'Done';
		  				dish.action = 'Remove';
		  				this.updateOrder(dish);
		  				break;
		  			case 'Remove':
		  				this.$store.dispatch('deleteOrder', dish._id);
		  				this.orders = this.filtered = this.$store.getters.Orders;
	  					break;
		  		}
		  	},
		  	getWorker(data) {
		  		this.worker = data;
		  	},
	  		filterByStatus(status) {
		  		if (status) {
		  			this.filtered = this.orders.filter(item => {
		  				return item.status === status;
		  			});
		  		} else {
		  			this.filtered = this.orders;
		  		}	  		
	  		},
	  		sortByDesc() {
	  			this.filtered.sort((a,b) => {
	  				return Date.parse(a.createdAt) - Date.parse(b.createdAt);
	  			});
	  		},
	  		sortByAsc() {
	  			this.filtered.sort((a,b) => {
	  				return Date.parse(b.createdAt) - Date.parse(a.createdAt);
	  			});
	  		},
	  	},
	  		  	
	  	components: {
	    	Banner,
	    	SelectWorker
	  	}
	};
</script>
<style lang="sass">
	@import '../assets/sass/stuff'	
</style>