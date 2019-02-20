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
						    <div v-if='save' class="success">{{message}}</div>
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
				save: false,
				error: false,
				message: '',
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
				this.save = true;
				this.message = 'Saved!';
				let self = this;

				this.$store.dispatch('saveDish', {
		 			title: self.title,
		 			img: self.imageSrc,
			    	quantity: self.quantity,
			    	price: self.price,
			    	excerpt: self.excerpt,
			    	description: self.description,
			    	ingradients: self.ingradients,
			    	weight: self.weight,
			    	status: 'unprocessed',
			    	action: 'Take in order'
				});
				setTimeout(() => {
					this.save = false;
					this.message = '';
				}, 1500);
				
				
			},
			getSrc (data) {
		        this.imageSrc = data;
		        console.log(this.imageSrc);
		    },
		    validationValue(values) {
		    	let result = [];
		    	for (let key in values) {
		    		result.push(values[key]);
		    	}

		    	return result.every(item => item);
		    }
		},
		components: {
			PreviewImage,
			Banner
		}
	}
</script>