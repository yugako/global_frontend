<template>
	<div class="container">
		<form @submit.prevent='updateWorker()' class="menu-item__form">
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
		            <input required v-model='username' type="text" id="name" placeholder="Name">
		        </div>
		        <div class="col-12 col-md-12">
		        	<label for="password">Worker password</label>
		            <input required placeholder="Password" id="password" v-model='password' type="text">
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
		    	<button type="submit" class="button">Save</button>
		    </div>
		</form>
	</div>
	
</template>
<script>
	export default {
		props: ['worker'],
		data () {
			return {
				username: this.worker.username,
				name: this.worker.name,
				password: this.worker.password,
			}
		},
		methods: {
			updateWorker () {
				this.$store.dispatch('updateWorkers', {
		 			id: this.worker._id,
		 			username: this.username,
		 			name: this.name,
			    	password: this.password,
		 		});
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
		}
	}
</script>