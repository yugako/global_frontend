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
		        <div class="col-12 col-md-12">
		        	<label for="password">Worker password</label>
		            <input required placeholder="Password" id="password" v-model='password' type="text">
		        </div>                    
		    </div>
		    <div v-if='save' class="success">Saved!</div>
		    <div v-if='error' class="error">Please fill all fields!</div>
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
				save: false,
				error: false,
				name: this.worker.name,
				password: this.worker.password,
			}
		},
		methods: {
			updateWorker () {
				this.$store.dispatch('updateWorkers', {
		 			id: this.worker._id,
		 			name: this.name,
			    	password: this.password,
		 		})
		       
		    },
		    validationValue(values) {
		    	let result = [];
		    	for (let key in values) {
		    		result.push(values[key]);
		    	}

		    	return result.every(item => item);
		    }
		},
	}
</script>