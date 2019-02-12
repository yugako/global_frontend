<template>
	<button @click='manageState(item)' class="actions-button button">{{item.action}}</button>
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
		  		switch (item.action) {
		  			case 'Take in order':
		  				item.collection[0].status = 'Processing';
		  				item.action = 'Done';
		  				break;
	  				case 'Done':
		  				item.collection[0].status = 'Done';
		  				item.action = 'Remove';
		  				break;
		  			case 'Remove':
		  				this.$store.commit('removeFromQueue', {item});
	  				break;
		  		}
		  	},
		}
		
	}
</script>