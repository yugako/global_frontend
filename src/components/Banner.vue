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
	.banner
		height: 491px
		background-size: cover
		background-repeat: no-repeat
		background-position: center center
		display: flex
		justify-content: center
		align-items: center
		&-content
			text-align: center
			&__text
				font-size: 46px
				color: #fff
				font-family: 'Alegreya', serif
				margin-bottom: 10px
			&__button
				display: inline-block
				border: 2px solid #fff
				margin-top: 60px
				padding: 10px 15px
				color: #fff
				transition: 0.5s
				&:hover
					border: 2px solid #d50c0d
					color: #d50c0d
					transition: 0.5s



</style>