<template>
	<div class="wrapper">
        <select v-model='selected' @change='selectWorker' name="workers">
    		<option disabled value="">Please choose worker</option>
    		<option v-for='(worker, index) in workersList' v-if='worker.role === "stuff"' :value="worker.name">
    			{{worker.name}}
    		</option>
    	</select>
	</div>
	<!-- /.wrapper -->
</template>
<script>
	export default {
		props: ['item'],
		beforeCreate: function() {
		  this.$options.computed = {
			 workersList(){
			     return this.$store.getters.Workers
			 }
		  }
		},
		data () {
			return {
				selected: this.item.worker
			}
		},
		methods: {
			selectWorker () {
				this.$emit('select', this.selected);
			}
		}
	}
</script>