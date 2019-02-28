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
				this.$store.dispatch('updateOrder', {
		        	id: this.item._id,
		        	title: this.item.title,
		        	number: this.item.number,
		        	price: this.item.price,
		 			status: this.item.status,
			    	action: this.item.action,
			    	worker: this.selected,
		 		})
				this.$emit('select', this.selected);
			}
		}
	}
</script>