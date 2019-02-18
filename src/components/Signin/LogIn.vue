<template>
	<form @submit.prevent="onSubmit">
	    <div class="single-input">
	        <input type="text" v-model.trim='login.name' placeholder="User name">
	    </div>
	    <div class="single-input">
	        <input type="password" v-model.trim="login.password" placeholder="Password">
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
				login:{},
				errors: []
			}
		},
		methods: {
			onSubmit() {
				axios.post('http://localhost:3000/login/', this.login)
					.then(response => {
						localStorage.setItem('jwtToken', response.data.token)
						this.$store.commit('hideForm');
						this.$store.dispatch("getOrders");
					})
					.catch(e => {
						console.log(e)
						this.errors.push(e)
					})
			},
			register() {
				this.$store.commit('showRegister');
			}
		}
	}
</script>
