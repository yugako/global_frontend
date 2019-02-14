<template>
	<div class="wrapper">
		<Banner text='Add new dish' class='new-banner'/>
		<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2">
						<form @submit.prevent='addToWorkers(newItem)' class="menu-item__form">
						    <div class="row">
						        <div class="col-md-12 col-12">
						        	<label for='name'>
						        		Worker name:	
						        	</label>                                 
						            <input required v-model='newItem.name' type="text" id="name" placeholder="Name">
						        </div>
						        <div class="col-12 col-md-6">
						        	<label for="password">Password</label>
						            <input required v-model='newItem.password' placeholder="Price" id="price" type="text">
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
	import Banner from "@/components/Banner.vue";

	export default {
		data () {
			return {
				save: false,
				error: false,
				message: '',
				newItem: {
					name: '',
					password: '',
					id: new Date().getTime(),
				}
				
			}
		},
		methods: {
			addToWorkers (item) {
				console.log(this.validationValue(this.newItem));
				if(this.validationValue(this.newItem)) {
					this.save = true;
					this.message = 'Saved!';
					this.$store.commit('addToWorkers', {item});
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
			Banner
		}
	}
</script>