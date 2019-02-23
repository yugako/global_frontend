<template>
	<form @submit.prevent='updateNote(dish._id)' class="menu-item__form">
	    <div class="row">
	        <div class="col-md-12 col-12">
	        	<label for='name'>
	        		Dish name:	
	        	</label>                                 
	            <input required v-model='title' type="text" id="name" placeholder="Name">
	        </div>
	        <div class="col-12 col-md-6">
	        	<label for="price">Dish price, $</label>
	            <input required placeholder="Price" id="price" v-model='price' type="text">
	        </div>
	        <div class="col-12 col-md-6">
	        	<label for="weight">Weight, g</label>
	            <input required v-model='weight' placeholder="Weight" type="text">
	        </div>
	        <div class="col-12">
	        	<label for="image">Select image</label>
	            <PreviewImage id='image' @getImg='getSrc' :currentImage='dish.img' />
	        </div> 
	        <div class="col-12">
	        	<label for="excerpt">Short description</label>
	            <textarea required class="excerpt" maxlength="100" v-model='excerpt' placeholder="Short description" type="text"></textarea>
	        </div>
	        <div class="col-12">
	        <label for="include">Ingredients</label>                              
	            <input required v-model='ingradients' id="include" type="text" placeholder="Components">
	        </div> 
	        <div class="col-md-12 col-12">
	        	<label for="descr">Dish description</label>                             
	            <textarea required class="descr" maxlength="500" v-model='description' id="descr" placeholder="Description"></textarea>
	        </div>                       
	    </div>
	    <div v-if='ErrorsState' class="error">
	    	Updating error!
	    	<ul>
	    		<li v-for='(err, i) in updateErrors' :key='i'>
	    			{{err.param | capitalize}} {{err.msg}}
	    		</li>
	    	</ul> 
	    </div>
	    <div class="success" v-if='SuccessState'>Saved</div>
	    <div class="menu-item__save">
	    	<button class="button">Save</button>
	    </div>
	</form>
</template>
<script>
	import axios from 'axios';

	import PreviewImage from "@/components/Admin/Menu/PreviewImage.vue";
	export default {
		props: ['dish'],
		data () {
			return {
				title: this.dish.title,
				quantity: this.dish.quantity || 1,
				price: this.dish.price,
				excerpt: this.dish.excerpt,
				description: this.dish.description,
				ingradients: this.dish.ingradients,
				weight: this.dish.weight,
				imageSrc: this.dish.img	
			}
			
		},
		methods: {
		 	updateNote() {
		 		let self = this;
		 		
		 		this.$store.dispatch('updateDishes', {
		 			id: self.dish._id,
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
		 		})
		 	},
		 	getSrc (data) {
		        this.imageSrc = data;
		    },
		},
		computed: {
			updateErrors () {
				return this.$store.getters.Errors
			},
			ErrorsState() {
				return this.$store.getters.ErrorsState
			},
			SuccessState() {
				return this.$store.getters.SuccessState
			}
		},
		filters: {
			capitalize(value) {
				return value[0].toUpperCase() + value.slice(1);
			}
		},
		components: {
			PreviewImage
		}
	}
</script>