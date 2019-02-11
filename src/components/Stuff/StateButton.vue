<template>
	<button @click='manageState(item)' class="actions-button button">{{message}}</button>
</template>
<script>
	export default {
		props: ['item'],
		data () {
			return {
				message: 'Take in order',
			}
		},
		methods: {
			manageState (item) {
		  		switch (this.message) {
		  			case 'Take in order':
		  				item.status = 'Processing';
		  				this.message = 'Done';
		  				break;
	  				case 'Done':
		  				item.status = 'Done';
		  				this.message = 'Remove';
		  				break;
		  			case 'Remove':
		  				item.status = 'Unprocessed';
		  				this.$store.commit('removeFromQueue', {item});
	  				break;
		  		}
		  	},
		}
		
	}
</script>