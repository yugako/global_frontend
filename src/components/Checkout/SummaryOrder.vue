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
			<div class="text-right text-info text-danger" v-if='disabled'>Please fill in all the fields</div>
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
	  		if (this.Picked === 'card') {
	  			if (this.validationFields('billing') && this.validationFields('pay')) {
	  				this.saveToOrders();
	  			} else {
	  				this.lightInputs('billing');
	  				this.lightInputs('pay');
	  				this.disabled = true;
	  				setTimeout(() => {this.disabled = false;}, 1500)
	  			}
	  		} else {
	  			if (this.validationFields('billing')) {
		  			this.saveToOrders();
		  			
		  		} else {
		  			this.lightInputs('billing');
		  			this.disabled = true;
		  			setTimeout(() => {this.disabled = false;}, 1500)
		  		}
	  		}
	  			
		},
		saveToOrders() {
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
		validationFields(name) {
	  		let elems = [...document.forms[name].elements];
	  		let result = elems.every((elem) => {
	  			return elem.value;
	  		});
	  		return result;
	  	},
	  	lightInputs(name) {
	  		let elems = [...document.forms[name].elements];
	  		elems.forEach(function(elem) {
	  			if (!elem.value) {
	  				if (!elem.classList.contains('border-danger')) {
	  					elem.classList.add('border-danger');
	  				}
	  				
	  			} else {
	  				elem.classList.remove('border-danger');
	  			}
	  		});
	  	},
	  	cleanFields(name) {
	  		let elems = [...document.forms[name].elements];
	  		elems.forEach(function(elem) {
	  			elem.value = '';
	  		});
	  	}
	  },
	  computed: {
	  	countTotalOrder () {
	  		return this.$store.getters.countTotalOrder;
	  	},
	  	countOrder () {
	  		return this.number;
	  	},
	  	Picked () {
	  		return this.$store.getters.Picked;
	  	},
	  	emptyCart() {
	  		return this.$store.getters.Cart.length === 0 ? true : false;
	  	}
	  },
	};
</script>
<style lang="sass">
	@import '../../assets/sass/summaryOrder'
</style>