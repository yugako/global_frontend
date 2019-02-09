<template>
	<form action="#" @submit.prevent=''>
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
							{{item.name}} x 
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
			<input class="submit" type="submit" value="Place order">
		</div>
		<!-- /.table-responsive -->
		
	</form>
</template>
<script>
	export default {
	  name: "SummaryOrder",
	  data () {
	  	return {
	  		cart: this.$store.state.cart
	  	}
	  },
	  methods: {
	  	countTotal (i) {
	  		return this.$store.getters.countTotal(i);
	  	},
	  },
	  computed: {
	  	countTotalOrder () {
	  		return this.$store.getters.countTotalOrder;
	  	}
	  },
	};
</script>
<style lang="sass">
	@import '../../assets/sass/summaryOrder'
</style>