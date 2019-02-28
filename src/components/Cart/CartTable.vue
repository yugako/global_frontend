<template>
	<div class="table-content table-responsive">
	    <table>
	        <thead>
	            <tr class="title-top">
	                <th class="product-thumbnail">Image</th>
	                <th class="product-name">Product</th>
	                <th class="product-price">Price</th>
	                <th class="product-quantity">Quantity</th>
	                <th class="product-subtotal">Total</th>
	                <th class="product-remove">Remove</th>
	            </tr>
	        </thead>
	        <tbody>
	            <tr v-for='(item, index) in cart' :key='index'>
	                <td class="product-thumbnail">
	                	<a href="#">
	                		<img :src="item.img" :alt="item.title" />
	                	</a>
	                </td>
	                <td class="product-name">
	                	<a href="#">{{item.title}}</a>
	                </td>
	                <td class="product-price">
	                	<span class="amount">{{item.price}}$</span>
	                </td>
	                <td class="product-quantity">
	                	<input min="0" type="number" v-model='item.quantity' />
	                </td>
	                <td class="product-subtotal">{{countTotal(index)}}</td>
	                <td class="product-remove" @click='removeFromCart(index)'>
	                	<span class="button">Remove</span>
	                </td>
	            </tr>
	            <tr v-if='cart.length === 0'>
	            	<td class='empty' colspan="6">No items in cart</td>
	            </tr>
	        </tbody>
	    </table>
	</div>
</template>
<script>
	export default {
		name: 'CartTable',
		data () {
			return {
				cart: this.$store.state.cart.cart,
			}
		},
		methods: {
			countTotal (i) {
				return this.$store.getters.countTotal(i);
			},
			removeFromCart (index) {
				this.$store.commit('removeFromCart', {index});
			}
		},
		computed: {
			isEmpty () {
				return this.cart.length === 0 ? true : false;
			}	
		}
	}
</script>