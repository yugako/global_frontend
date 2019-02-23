<template>
	<button @click='manageState(dish, index)' :disabled='!worker' class="actions-button button">{{dish.action}}</button>
</template>
<script>
	export default {
		props: ['dish', 'index', 'worker'],
		data () {
			return {
				
			}
		},
		methods: {
			manageState (dish, index) {
		  		switch (dish.action) {
		  			case 'Take in order':
		  				dish.status = 'Processing';
		  				dish.action = 'Done';
		  				break;
	  				case 'Done':
		  				dish.status = 'Done';
		  				dish.action = 'Remove';
		  				break;
		  			case 'Remove':
		  				this.$store.dispatch('deleteOrder', dish._id);
		  				dish.status = 'uprocessed';
		  				dish.action = 'Take in order';
	  				break;
		  		}
		  		this.$emit('onstate', dish);
		  	},
		}
		
	}
</script>