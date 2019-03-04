<template>
	<div class="wrapper">
		<div class="table-responsive">
			<table class="table">
				<thead>
				    <tr class="title-top">
				        <th class="title-top_item">Product</th>
				        <th class="title-top_item">Total</th>
				    </tr>
				</thead>
				<tbody>
					<tr v-for='(item,index) in cart' :key='index'>
						<td class="product-name">
							{{item.title}} x 
							<span class='amount'>{{item.quantity}}</span>
						</td>
						<td class="product-price">{{countTotal(index)}}</td>
					</tr>
					<tr class="table-footer">
						<td class="product-total__head">Order total</td>
						<td class="product-total__price">{{countTotalOrder}}</td>
					</tr>
				</tbody>
			</table>
			<button @click='addToQueue()' :disabled='this.$store.state.cart.cart.length === 0' class="submit">Place order</button>
		</div>
		<!-- /.table-responsive -->
	</div>
	<!-- /.wrapper -->
</template>
<script>
	export default {
	  name: "SummaryOrder",
	  data () {
	  	return {
	  		cart: this.$store.state.cart.cart,
	  		number: localStorage.getItem('number') || 1,
	  	}
	  },
	  methods: {
	  	countTotal (i) {
	  		return this.$store.getters.countTotal(i);
	  	},
	  	addToQueue () {
	  		let cart = this.cart;

	  		cart.forEach((elem, index) => {
		  		this.$store.dispatch('saveOrder', {
		 			title: elem.title,
		 			number: this.countOrder,
			    	price: this.countTotal(index),
			    	amount: elem.quantity,
			    	action: 'Take in order',
			    	status: 'unprocessed'
				});
	  		});
	  		this.number++;
	  		localStorage.setItem('number', this.number);
			setTimeout(() => {
				this.$store.commit('cleanCart', cart);
			}, 0);
				
		},
	  },
	  computed: {
	  	countTotalOrder () {
	  		return this.$store.getters.countTotalOrder;
	  	},
	  	countOrder () {
	  		return this.number;
	  	}
	  },
	};
</script>
<style lang="sass">
	@import '../../assets/sass/summaryOrder'
</style>