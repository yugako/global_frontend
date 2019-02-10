<template>
	<div class="container">
		<form @submit.prevent='saveItem(worker)' class="menu-item__form">
		    <div class="row">
		        <div class="col-md-12 col-12">
		        	<label for='name'>
		        		Worker name:	
		        	</label>                                 
		            <input required v-model='worker.name' type="text" id="name" placeholder="Name">
		        </div>
		        <div class="col-12 col-md-12">
		        	<label for="password">Worker password</label>
		            <input required placeholder="Password" id="password" v-model='worker.password' type="text">
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
			}
		},
		methods: {
			saveItem (item) {
				if(this.validationValue(item)) {
					this.save = true;
					setTimeout(() => {
						this.save = false;
					}, 1500);
				} else {
					this.error = true;
					setTimeout(() => {
						this.error = false;
					}, 1500);
				}
		       
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