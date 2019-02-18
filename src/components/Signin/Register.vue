<template>
	<form @submit.prevent="onSubmit">
	    <div class="single-input">
	        <input class="cr-round--lg" v-model.trim="register.name" type="text" placeholder="User name">
	    </div>
	    <div class="single-input">
	        <input class="cr-round--lg" v-model.trim="register.password" type="password" placeholder="Password">
	    </div>
	    <div class="single-input">
	        <button type="submit" class="food__btn"><span>Sign Up</span></button>
	    </div>
	</form>
</template>
<script>
	import axios from 'axios';
	export default {
		name: 'register',
		data () {
			return {
				register: {},
				errors: []
			}
		},
		methods: {
		    onSubmit () {
		      	axios.post(`http://localhost:3000/register/`, this.register)
		      	.then(response => {
		        	alert("Registered successfully")
		        	this.$store.commit('showLogin');
		      	})
		      	.catch(e => {
		        	console.log(e)
		        	this.errors.push(e)
		      	})
		    },
		}
	}
</script>