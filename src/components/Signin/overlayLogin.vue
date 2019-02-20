<template>
	<transition name="slide-fade">
			<div class="overlayLogin" v-if='this.$store.state.form.showForm'>
				<div class="login-form" >
					<h3 class="login-form__title">Login</h3>
					<LogIn />

				    <span class="close" @click='hideForm()'>&times;</span>
				</div>
			</div>
		</transition>
</template>
<script>
	import LogIn from '@/components/Signin/LogIn.vue';
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
		
		components: {
			LogIn
		}
	}
</script>