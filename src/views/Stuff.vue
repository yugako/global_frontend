<template>
	<section class="stuff">
		<Banner text='Stuff page' class='stuff-banner' />
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-8">
					<div class="stuff-queue">
						<div class="stuff__title">
							Order queue
						</div>
						<!-- /.stuff-queue__title -->
						<div class="table-content table-responsive">
						    <table>
						        <thead>
						            <tr class="title-top">
						                <th>Name</th>
						                <th>Worker</th>
						                <th>Status</th>
						             	<th>Actions</th>
						            </tr>
						        </thead>
						        <tbody>
						            <tr v-for='(item, index) in queue' :key='index'>
						                <td class="queue-name">
						                	{{item.name}}
						                </td>
						                <td class="queue-worker">
<!-- 						                	<span v-if='process' class="currentWorker">{{selected}}</span>
 -->						                	<select name="workers">
						                		<option disabled value="">Please choose worker</option>
						                		<option v-for='(worker, index) in workers' :value="worker.name">{{worker.name}}</option>
						                	</select>
						                </td>
						                <td class="queue-status">
						                	{{item.status}}
						                </td>
						                <td class="actions">
						                	<button @click='manageState(item)' class="actions-button button">{{message}}</button>
						           			<!-- <a href="#" class="actions-button edit">Edit</a>
						                	<a href="#" class="actions-button remove">Remove</a> -->
						                </td>
						            </tr>
						
						        </tbody>
						    </table>
						</div>
					</div>
					<!-- /.stuff-queue -->
				</div>
				<!-- /.col-12 col-lg-8 -->
				<div class="col-12 col-lg-4">
					<aside class="stuff-filters">
						<div class="stuff__title">
							Orders filters
						</div>
						<!-- /.stuff__title -->
						<div class="stuff-filters__state">
							<h3>Sort by status: </h3>
							<ul class="stuff-filters__list state">
								<li class="stuff-filters__item">Unprocessed</li>
								<li class="stuff-filters__item">Processed</li>
								<li class="stuff-filters__item">Complete</li>
							</ul>
						</div>
						<!-- /.stuff-filters__state -->
						<div class="stuff-filters__time">
							<h3>Sort by date: </h3>
							<ul class="stuff-filters__list time">
								<li class="stuff-filters__item">Newest</li>
								<li class="stuff-filters__item">Oldest</li>
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

	export default {
	  name: "home",
	  data () {
	  	return {
	  		queue: this.$store.state.queue,
	  		workers: this.$store.state.workers,
	  		message: 'Take in order',
	  		process: false,
	  		selected: ''
	  	}
	  },
	  methods: {
	  	manageState (item) {
	  		switch (this.message) {
	  			case 'Take in order':
	  				item.status = 'In process';
	  				this.message = 'Done';
	  				break;
  				case 'Done':
	  				item.status = 'Done';
	  				this.message = 'Remove';
	  				break;
	  			case 'Remove':
	  				item.status = 'Unprocessed';
	  				this.$store.commit('removeFromQueue', {item});
  				break;
	  		}
	  	}
	  },
	  components: {
	    Banner
	  }
	};
</script>
<style lang="sass">
	@import '../assets/sass/stuff'	
</style>