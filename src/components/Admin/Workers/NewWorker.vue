<template>
	<div class="wrapper">
		<Banner text='Add new dish' class='new-banner'/>
		<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2">
						<form @submit.prevent='addToWorkers()' class="menu-item__form">
						    <div class="row">
						        <div class="col-md-12 col-12">
						        	<label for='name'>
						        		Worker name:	
						        	</label>                                 
						            <input required v-model='name' type="text" id="name" placeholder="Name">
						        </div>
						        <div class="col-md-12 col-12">
						        	<label for='name'>
						        		Worker username:	
						        	</label>                                 
						            <input required v-model='username' type="text" id="name" placeholder="Username">
						        </div>
						        <div class="col-12 col-md-12">
						        	<label for="password">Password</label>
						            <input required v-model='password' placeholder="Password" id="password" type="text">
						        </div>                
						    </div>
						    <div v-if='ErrorsState' class="error">
						    	Saving error!
						    	<ul>
						    		<li v-for='(err, i) in updateErrors' :key='i'>
						    			{{err.param | capitalize}} {{err.msg}}
						    		</li>
						    	</ul> 
						    </div>
		    				<div class="success" v-if='SuccessState'>Saved</div>
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
				username: '',
				name: '',
				password: '',
				role: '' 
				
			}
		},
		methods: {
			addToWorkers (item) {
				this.$store.dispatch('saveWorker', {
					username: this.username,
		 			name: this.name,
			    	password: this.password,
			    	role: this.role || 'stuff'
				})
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
			Banner
		}
	}
</script>