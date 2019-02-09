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
							                	<a href="#" class="actions-button remove">Remove</a>
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
							                	<span class="amount">{{dish.price}}</span>
							                </td>
							               
							                <td class="product-excerpt">{{dish.excerpt}}</td>
							                <td class="actions">
							           			<a href="#" class="actions-button edit">Edit</a>
							                	<a href="#" class="actions-button remove">Remove</a>
							                </td>
							            </tr>
							        </tbody>
							    </table>
							</div>
							<div class="admin-content__add">
								<button class="admin-content__add_button">Add dish</button>
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
	export default {
		data () {
			return {
				showWorkers: false,
				showDishes: false,
				dishes: this.$store.state.dishes,
				workers: this.$store.state.workers
			}
		},
		components: {
			Banner
		}
	}
</script>
<style lang="sass">
	.admin
		&-banner
			background-image: url('../assets/img/admin/bg.jpg')
		&-content
			&__workers
				margin-bottom: 35px
			&__title
				background: #d50c0d
				color: #ffffff
				display: block
				font-size: 14px
				font-weight: 700
				line-height: 45px
				padding: 0 12px 0 28px
				text-transform: uppercase
				width: 100%
				margin: 0
				cursor: pointer

			&__add
				text-align: right
				&_button
					font-family: "Alegreya", serif
					font-size: 18px
					color: #444!important
					padding: 10px 15px
					background-color: #f2f2f2
					font-weight: bold
					border-radius: 5px
					transition: 0.6s
					border: none
					cursor: pointer
					&:hover
						background-color: #d50c0d
						color: #fff!important
						transition: 0.6s
			table
				td
					border-left: 1px solid #eaeaea
		.worker
			
			&-name, &-password
				font-weight: 700
				margin-left: 10px
				color: #6f6f6f!important
				font-size: 14px
			&-password
				font-weight: 400
		.product
			&-thumbnail
				img
					max-width: 150px
					height: auto
			&-name, &-excerpt
				font-weight: 700
				margin-left: 10px
				color: #6f6f6f!important
				font-size: 14px
			&-excerpt
				font-weight: 400
				text-align: justify	
	.edit, .remove
		margin-right: 15px
		font-family: "Alegreya", serif
		font-size: 18px
		color: #444!important
		padding: 10px 15px
		background-color: #f2f2f2
		font-weight: bold
		border-radius: 5px
		transition: 0.6s
		border: none
		cursor: pointer
		&:hover
			background-color: #d50c0d
			color: #fff!important
			transition: 0.6s
	.slide-fade-enter-active 
	  	transition: all .3s ease
	
	.slide-fade-leave-active 
	  	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
	
	.slide-fade-enter, .slide-fade-leave-to
	  	transform: translateY(10px)
	  	opacity: 0
</style>