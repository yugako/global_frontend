<template>
	<div class="banner">
		<div class="banner-content">
			<div class="banner-content__text">
				<span>{{text}}</span>
			</div>
			<!-- /.banner-text -->
			<router-link v-if='mainPage' to='/menu' class="banner-content__button">
				See menu
			</router-link>	
			<!-- /.banner-button -->
			<!-- <div class="banner-nav">
				<router-link></router-link>
			</div> -->
			<!-- /.banner-nav -->
		</div>
		<!-- /.banner-content -->
	</div>
	<!-- /.banner -->
</template>
<script>
	export default {
		props: ['text', 'mainPage']
	}
</script>
<style lang="sass">
	@import '../assets/sass/banner'
</style>