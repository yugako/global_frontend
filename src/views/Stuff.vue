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
						        <tbody>
						            <tr v-for='(item, index) in queue' :key='index'>
						            	<td class='stuff-order__number'>Order №{{index+1}}</td>
										<td >
											<table>
												<thead>
										            <tr class="title-top">
										                <th>Name</th>
										                <th>Worker</th>
										                <th>Order date</th>
										                <th>Status</th>
										             	<th>Actions</th>
										            </tr>
										        </thead>
										        <tbody>
										        	<tr v-for='(dish, i) in item.collection' :key='i'>
														<td class="queue-name">
										                	{{dish.name}}
										                </td>
										                <td class="queue-worker">
											                <SelectWorker :item='dish' />
										                </td>
													    <td class="queue-worker">
											                {{item.date | moment("dd, h:mm:ss a")}}
										                </td>
										                <td class="queue-status">
										                	{{dish.status}}
										                </td>
										                <td class="actions">
										                	<StateButton :index='i' :dish='dish' />
										                </td>
														
													</tr>
													<tr class="done" v-if='item.collection.length === 0' >
														<td colspan="5">
															Order completed! <br>
															<button @click='removeOrder(index)' class="button">Remove order</button>
														</td>
														
													</tr>  
										        </tbody>
												

											</table>
										</td> 
										
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
								<li class="stuff-filters__item" @click='filterByStatus("processing")'>Processing</li>
								<li class="stuff-filters__item" @click='filterByStatus("done")'>Completed</li>
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
	export default {
	  name: "home",
	  data () {
	  	return {
	  		queue: this.$store.state.queue,
	  		filtered: this.$store.state.queue,
	  		workers: this.$store.state.workers,
	  	}
	  },
	  methods: {
	  	removeOrder (index) {
	  		this.$store.commit('removeFromQueue', {index});
	  	},
	  	filterByStatus(status) {
	  		if (status) {
	  			this.filtered = [];
	  			this.filtered = this.queue.filter(item => {
	  				let result = [];
	  				item.collection.forEach((dish) => {
	  					if(dish.status === status) {
	  						result.push(item);
	  					}
	  				});
	  				return result;
	  			});
	  		} else {
	  			this.filtered = this.queue;
	  		}
	  		console.log(this.filtered)
	  		
	  	},
	  	sortByDesc() {
	  		this.filtered = this.queue.sort((a,b) => {
	  			return a.date - b.date;
	  		});
	  	},
	  	sortByAsc() {
	  		this.filtered = this.queue.sort((a,b) => {
	  			return b.date - a.date;
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