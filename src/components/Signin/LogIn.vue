<template>
	<form @submit.prevent="onSubmit">
	    <div class="single-input">
	        <input type="text" v-model.trim='login.name' placeholder="User name">
	    </div>
	    <div class="single-input">
	        <input type="password" v-model.trim="login.password" placeholder="Password">
	    </div>
	    <div class="single-input">
	    	<label for="role">
	    		Is admin?
	    		<input type="checkbox" v-model="checked">
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
				login:{
					name: '',
					password: '',
					role: ''
				},
				errors: [],
			}
		},
		methods: {
			onSubmit() {
				this.login.role = this.setRole;
				axios.post('http://localhost:3000/login/', this.login)
					.then(response => {
						console.log(response);
						localStorage.setItem('jwtToken', response.data.token)
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
						console.log(e)
						this.errors.push(e)
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
