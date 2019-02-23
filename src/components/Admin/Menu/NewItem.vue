<template>
	<div class="wrapper">
		<Banner text='Add new dish' class='new-banner'/>
		<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2">
						<form @submit.prevent='addToMenu()' class="menu-item__form">
						    <div class="row">
						        <div class="col-md-12 col-12">
						        	<label for='name'>
						        		Dish name:	
						        	</label>                                 
						            <input required v-model='title' type="text" id="name" placeholder="Name">
						        </div>
						        <div class="col-12 col-md-6">
						        	<label for="price">Dish price, $</label>
						            <input required v-model.number='price' placeholder="Price" id="price" type="text">
						        </div>
						        <div class="col-12 col-md-6">
						        	<label for="weight">Weight, g</label>
						            <input required v-model.number='weight' placeholder="Weight" type="text">
						        </div>
						        <div class="col-12">
						            <PreviewImage @getImg='getSrc' />
						        </div> 
						        <div class="col-12">
						        	<label for="excerpt">Short description</label>
						            <textarea required v-model='excerpt' class="excerpt" maxlength="100"  placeholder="Short description" type="text"></textarea>
						        </div>
						        <div class="col-12">
						        <label for="include">Ingredients</label>                              
						            <input required v-model='ingradients' id="include" type="text" placeholder="Components">
						        </div> 
						        <div class="col-md-12 col-12">
						        	<label for="descr">Dish description</label>                             
						            <textarea required v-model='description' class="descr" maxlength="500" id="descr" placeholder="Description"></textarea>
						        </div>                       
						    </div>
						    <div v-if='ErrorsStateDishes' class="error">
						    	Saving error!
						    	<ul>
						    		<li v-for='(err, i) in updateErrors' :key='i'>
						    			{{err.param | capitalize}} {{err.msg}}
						    		</li>
						    	</ul> 
						    </div>
						    <div class="success" v-if='SuccessStateDishes'>Saved</div>
						<div class="menu-item__save">
							<button type="submit" class="button">Save</button>
						</div>
						<!-- /.menu-item__save -->
						</form>
						
					</div>
				</div>
		</div>
	</div>
	<!-- /.wrapper -->
	
</template>
<script>
	import PreviewImage from "@/components/Admin/Menu/PreviewImage.vue";
	import Banner from "@/components/Banner.vue";

	export default {
		data () {
			return {
				title: '',
				quantity: 1,
				price: 0,
				excerpt: '',
				description: '',
				ingradients: '',
				weight: 0,
				imageSrc: '',
				
			}
		},
		methods: {
			addToMenu () {
				this.$store.dispatch('saveDish', {
		 			title: this.title,
		 			img: this.imageSrc,
			    	quantity: this.quantity,
			    	price: this.price,
			    	excerpt: this.excerpt,
			    	description: this.description,
			    	ingradients: this.ingradients,
			    	weight: this.weight,
			    	status: 'unprocessed',
			    	action: 'Take in order'
				});
			},
			getSrc (data) {
		        this.imageSrc = data;
		    },
		},
		computed: {
			updateErrors () {
				return this.$store.getters.ErrorsDishes
			},
			ErrorsStateDishes() {
				return this.$store.getters.ErrorsStateDishes;
			},
			SuccessStateDishes() {
				return this.$store.getters.SuccessStateDishes;
			}
		},
		filters: {
			capitalize(value) {
				return value[0].toUpperCase() + value.slice(1);
			}
		},
		components: {
			PreviewImage,
			Banner
		}
	}
</script>