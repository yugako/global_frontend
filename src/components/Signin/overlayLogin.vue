<template>
	<transition name="slide-fade">
			<div class="overlayLogin" v-if='this.$store.state.showForm'>
				<div class="login-form" >
					<ul class="login-list">
						<li :class='{active: this.$store.state.loginType === "login"}' @click='showLogin()' class="login-list__item">Login</li>
						<li :class='{active: this.$store.state.loginType === "register"}' @click='showRegister()' class="login-list__item">Register</li>
					</ul>
					
					<component :is="componentInstance" />

				    <span class="close" @click='hideForm()'>&times;</span>
				</div>
			</div>
		</transition>
</template>
<script>
	import LogIn from '@/components/Signin/LogIn.vue';
	import Register from '@/components/Signin/Register.vue';
	export default {
		name: 'overlayLogin',
		data() {
			return {

			}
		},
		methods: {
			hideForm() {
				this.$store.commit('hideForm');
			},
			showLogin() {
				this.$store.commit('showLogin');
			},
			showRegister() {
				this.$store.commit('showRegister');
			},
		},
		computed: {
			componentInstance () {
			   return this.$store.state.loginType === 'login' ? 'LogIn' : 'Register';
			}
		},
		components: {
			LogIn,
			Register
		}
	}
</script>