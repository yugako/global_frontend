<template>
	<section class="stuff">
		<Banner text='Stuff page' class='stuff-banner' />
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
						                	<th>Order number</th>
						                    <th>Name</th>
						                    <th>Worker</th>
						                    <th>Order date</th>
						                    <th>Status</th>
						                    <th>Total price</th>
						                 	<th>Actions</th>
						                </tr>
						            </thead>
						            <tbody>
						            	<tr v-for='(dish, i) in filtered' :key='i'>
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
						                    	{{dish.price}}
						                    </td>
						                    <td class="actions">
						                    	<StateButton @onstate='getState' @click.native='stateChange' :index='i' :worker='worker' :dish='dish' />
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
	import StateButton from "@/components/Stuff/StateButton.vue";
	import SelectWorker from "@/components/Stuff/SelectWorker.vue";
	import axios from 'axios';
	export default {
	  	name: "stuff",
	  	created () {
	  		axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
	  		axios.get('http://localhost:3000/orders/')
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
	  	},
	  	beforeRouteLeave(to, from, next) {
	  		if(!this.$store.state.logged) {
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
	  		stateChange (data) {
		        this.$store.dispatch('updateOrder', {
		        	id: this.id,
		        	title: this.title,
		        	number: this.number,
		        	price: this.price,
		 			status: this.status,
			    	action: this.action,
			    	worker: this.worker,
			    	
		 		})
		  	},
		  	getWorker(data) {
		  		this.worker = data;
		  	},
		  	getState(data) {
		  		this.id = data._id;
		  		this.title = data.title;
		  		this.number = data.number;
		  		this.price = data.price;
		  		this.status = data.status;
		  		this.action = data.action
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
	    	StateButton,
	    	SelectWorker
	  	}
	};
</script>
<style lang="sass">
	@import '../assets/sass/stuff'	
</style>