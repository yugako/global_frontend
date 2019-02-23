<template>
	<form @submit.prevent="onSubmit">
		<div class="error-message" v-if='errors'>Incorrect username/password or role. <br> Please check it and try again.</div>
		<div class="single-input">
	        <input type="text" v-model.trim='login.username' required placeholder="User name">
	    </div>
	    <div class="single-input">
	        <input type="password" v-model.trim="login.password" required placeholder="Password">
	    </div>
	    <div class="single-input check">
	        <input id='role' type="checkbox" v-model="checked">
	        <label for="role">
	    		Is admin?
	    	</label>
	    </div>
	    <div class="single-input">
	        <button type="submit" class="food__btn"><span>Go</span></button>
	    </div>
	</form>
</template>
<script>
	import axios from "axios";
	export default {
		name: 'login',
		data () {
			return {
				checked: '',
				errors: false,
				login:{
					username: '',
					password: '',
					role: ''
				},
			}
		},
		methods: {
			onSubmit() {
				this.login.role = this.setRole;
				let url = 'http://localhost:3000/login/';
				
				axios.post(url, this.login)
					.then(response => {
						this.errors = false;
						this.$store.commit('setUserName', response.data.user.name);
						this.$store.commit('isLogIn');
						this.$store.commit('hideForm');

						if (response.data.role.toLowerCase() === 'admin') {
							this.$router.push({
						    	name: 'admin'
							})
						} else {
							this.$router.push({
							    name: 'stuff'
							})	
						}
						
					})
					.catch(e => {
						console.log(e.response);
						this.errors = true;
					})
			},
			
			register() {
				this.$store.commit('showRegister');
			}
		},
		computed: {
			setRole() {
				return this.checked ? 'admin' : 'stuff';
			}
		}
	}
</script>
