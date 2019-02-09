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
						            <tr>
						                <td class="queue-name">
						                	Spicy Beef Burger
						                </td>
						                <td class="queue-worker">
						                	Thor Odinson
						                </td>
						                <td class="queue-status">
						                	Unprocessed
						                </td>
						                <td class="actions">
						                	<a href="#" class="actions-button">Take in order</a>
						           			<!-- <a href="#" class="actions-button edit">Edit</a>
						                	<a href="#" class="actions-button remove">Remove</a> -->
						                </td>
						            </tr>
						            <tr>
						                <td class="queue-name">
						                	Spicy Beef Burger
						                </td>
						                <td class="queue-worker">
						                	Thor Odinson
						                </td>
						                <td class="queue-status">
						                	Unprocessed
						                </td>
						                <td class="actions">
						                	<a href="#" class="actions-button">Take in order</a>
						           			<!-- <a href="#" class="actions-button edit">Edit</a>
						                	<a href="#" class="actions-button remove">Remove</a> -->
						                </td>
						            </tr>
						            <tr>
						                <td class="queue-name">
						                	Spicy Beef Burger
						                </td>
						                <td class="queue-worker">
						                	Thor Odinson
						                </td>
						                <td class="queue-status">
						                	Unprocessed
						                </td>
						                <td class="actions">
						                	<a href="#" class="actions-button">Take in order</a>
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