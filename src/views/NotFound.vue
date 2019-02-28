<template>
	<Banner text='Page not found' class='empty-banner' />
</template>
<script>
	import Banner from "@/components/Banner.vue";
	export default {
		components: {
			Banner
		}
	}
</script>
<style lang="sass">
	.empty-banner
		background-image: url('../assets/img/not_found.jpg')
		position: relative
		&::before
			content: ''
			position: absolute
			top: 0
			left: 0
			width: 100%
			height: 100%
			background-color: rgba(#000, 0.6)
        
</style>