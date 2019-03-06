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
					<tr>
						<td class='empty' v-if='cart.length === 0' colspan="2">No items in cart</td>
					</tr>
					<tr class="table-footer">
						<td class="product-total__head">Order total</td>
						<td class="product-total__price">{{countTotalOrder}}</td>
					</tr>
					
				</tbody>
			</table>
			<div v-if='disabled'>You must entered all fields!</div>
			<button @click='addToQueue()' class="submit">Place order</button>
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
	  		disabled: false
	  	}
	  },
	  methods: {
	  	countTotal (i) {
	  		return this.$store.getters.countTotal(i);
	  	},
	  	addToQueue () {
	  		let cart = this.cart;
	  		if (this.validationFields('billing') && this.validationFields('pay')) {

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
	  		} else {
	  			this.disabled = false;
	  		}
	  		
				
		},
		validationFields(name) {
	  		let elems = [...document.forms[name].elements];
	  		let result = elems.every( (elem) => {
	  			return elem.value;
	  		});
	  		return result;
	  	}
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