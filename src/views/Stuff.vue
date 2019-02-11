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
						                <th>Order date</th>
						                <th>Status</th>
						             	<th>Actions</th>
						            </tr>
						        </thead>
						        <tbody>
						            <tr v-for='(item, index) in filtered' :key='index'>
						                <td class="queue-name">
						                	{{item.collection[0].name}}
						                </td>
						                <td class="queue-worker">
							                <SelectWorker :item='item.collection[0]' />
						                </td>
						                <td class="queue-worker">
							                {{item.date | moment("dd, h:mm:ss a")}}
						                </td>
						                <td class="queue-status">
						                	{{item.collection[0].status}}
						                </td>
						                <td class="actions">
						                	<StateButton :item='item.collection[0]' />
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
								<li class="stuff-filters__item" @click='showAll()'>All</li>
								<li class="stuff-filters__item" @click='showUnprocessed()'>Unprocessed</li>
								<li class="stuff-filters__item" @click='showProcessing()'>Processing</li>
								<li class="stuff-filters__item" @click='showCompleted()'>Completed</li>
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
	  	showAll() {
	  		this.filtered = this.queue;
	  	},
	  	showUnprocessed() {
	  		this.filtered = this.queue.filter(item => item.collection[0].status.toLowerCase() === 'unprocessed');
	  	},
	  	showProcessing() {
	  		this.filtered = this.queue.filter(item => item.collection[0].status.toLowerCase() === 'processing');
	  	},
	  	showCompleted() {
	  		this.filtered = this.queue.filter(item => item.collection[0].status.toLowerCase() === 'done');
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