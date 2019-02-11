<template>
	<div class="wrapper">
        <select name="workers">
    		<option disabled value="">Please choose worker</option>
    		<option v-for='(worker, index) in workers' :value="worker.name">{{worker.name}}</option>
    	</select>
	</div>
	<!-- /.wrapper -->
</template>
<script>
	export default {
		data () {
			return {
				workers: this.$store.state.workers,
			}
		}
	}
</script>