<template>
	<form action="#" class="menu-item__form">
	    <div class="row">
	        <div class="col-md-12 col-12">
	        	<label for='name'>
	        		Dish name:	
	        	</label>                                 
	            <input required v-model='dish.name' type="text" id="name" placeholder="Name">
	        </div>
	        <div class="col-12 col-md-6">
	        	<label for="price">Dish price, $</label>
	            <input required placeholder="Price" id="price" v-model='dish.price' type="text">
	        </div>
	        <div class="col-12 col-md-6">
	        	<label for="weight">Weight, g</label>
	            <input required v-model='dish.weight' placeholder="Weight" type="text">
	        </div>
	        <!-- <div class="col-12">
	         	<label for="img">Path to image</label>                              
	            <input required v-model='dish.img' id="img" type="text" placeholder="Path to image">
	        </div>  -->
	        <div class="col-12">
	        	<label for="image">Select image</label>
	            <PreviewImage id='image' :currentImage='dish.img' />
	        </div> 
	        <div class="col-12">
	        	<label for="excerpt">Short description</label>
	            <textarea required class="excerpt" maxlength="100" v-model='dish.excerpt' placeholder="Short description" type="text"></textarea>
	        </div>
	        <div class="col-12">
	        <label for="include">Ingredients</label>                              
	            <input required v-model='dish.include' id="include" type="text" placeholder="Components">
	        </div> 
	        <div class="col-md-12 col-12">
	        	<label for="descr">Dish description</label>                             
	            <textarea required class="descr" maxlength="500" v-model='dish.descr' id="descr" placeholder="Description"></textarea>
	        </div>                       
	    </div>
	</form>
</template>
<script>
	import PreviewImage from "@/components/Admin/PreviewImage.vue";
	export default {
		props: ['dish'],
		components: {
			PreviewImage
		}
	}
</script>