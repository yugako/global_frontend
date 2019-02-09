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
	.table
		border-bottom: 1px solid #ededed
		border-collapse: collapse
		border-spacing: 0
		font-size: 14px
		line-height: 2
		margin: 0 0 10px
		width: 100%
		background-color: #f1f2f3
		thead
			th
				border-bottom: 2px solid #000
		td
			font-size: 13px
			padding: 20px 10px
			text-align: center
			vertical-align: middle
			border-left: 1px solid #eaeaea
			border-bottom: 1px solid #eaeaea
			border-right: 1px solid #eaeaea
		th
			font-weight: bold
			padding: 20px 10px
			text-align: center
			text-transform: uppercase
			vertical-align: middle
			white-space: nowrap
			border-left: 1px solid #eaeaea
			border-right: 1px solid #eaeaea
			color: #777
			font-size: 14px
		&-footer
			border-top: 2px solid #000
		.title-top
			border-bottom: 2px solid #000
			&_item
				color: #000
		.product
			&-name
			    margin-left: 10px
			    color: #606060
			    font-size: 14px
			&-total
				&__head, &__price
					color: #000
					font-size: 14px
					font-weight: bold
</style>