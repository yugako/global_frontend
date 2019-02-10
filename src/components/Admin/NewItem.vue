<template>
	<div class="wrapper">
		<Banner text='Add new dish' class='new-banner'/>
		<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2">
						<form @submit.prevent='addToMenu(newItem)' class="menu-item__form">
						    <div class="row">
						        <div class="col-md-12 col-12">
						        	<label for='name'>
						        		Dish name:	
						        	</label>                                 
						            <input required v-model='newItem.name' type="text" id="name" placeholder="Name">
						        </div>
						        <div class="col-12 col-md-6">
						        	<label for="price">Dish price, $</label>
						            <input required v-model='newItem.price' placeholder="Price" id="price" type="text">
						        </div>
						        <div class="col-12 col-md-6">
						        	<label for="weight">Weight, g</label>
						            <input required v-model='newItem.weight' placeholder="Weight" type="text">
						        </div>
						        <div class="col-12">
						         	<!-- <label for="img">Path to image</label>                              
						            <input required v-model='newItem.img' id="img" type="text" placeholder="Path to image"> -->
						            <PreviewImage @getImg='getSrc' />
						        </div> 
						        <div class="col-12">
						        	<label for="excerpt">Short description</label>
						            <textarea required v-model='newItem.excerpt' class="excerpt" maxlength="100"  placeholder="Short description" type="text"></textarea>
						        </div>
						        <div class="col-12">
						        <label for="include">Ingradients</label>                              
						            <input required v-model='newItem.include' id="include" type="text" placeholder="Components">
						        </div> 
						        <div class="col-md-12 col-12">
						        	<label for="descr">Dish description</label>                             
						            <textarea required v-model='newItem.descr' class="descr" maxlength="500" id="descr" placeholder="Description"></textarea>
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
	import PreviewImage from "@/components/Admin/PreviewImage.vue";
	import Banner from "@/components/Banner.vue";

	export default {
		data () {
			return {
				imageSrc: '',
				save: false,
				error: false,
				message: '',
				newItem: {
					name: '',
					price: 0,
					img: this.imageSrc || require('@/assets/img/menu-list/placeImg.jpg'),
					weight: 0,
					quantity: 1,
					excerpt: '',
					include: '',
					descr: ''
				}
				
			}
		},
		methods: {
			addToMenu (item) {
				console.log(this.validationValue(this.newItem));
				if(this.validationValue(this.newItem)) {
					this.save = true;
					this.message = 'Saved!';
					this.$store.commit('addToMenu', {item});
					setTimeout(() => {
						this.save = false;
						this.message = '';
					}, 1500);
				}
				
				
			},
			getSrc (data) {
		        this.imageSrc = data;
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