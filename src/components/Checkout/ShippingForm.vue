<template>
	<div class="shipping">
		<div class="shipping-title" @click='show = !show'>
			2. Shipping Information
		</div>
		<!-- /.shipping-title -->
		<transition name="slide-fade">
		<div class="shipping-content" v-show='show'>
			<h5>shipping address</h5>
				<p>
					<span>address&nbsp;</span>
					Bootexperts, Banasree D-Block, Dhaka 1219, Bangladesh
				</p>
				<label>
					<input type="checkbox" name="ship_diff">
					Ship to a different address?
				</label>
				<form action="#" class="shipping-form checkout-form">
				    <div class="row">
				        <div class="col-12 mb--20">
				            <select>
				              <option disabled value="1">Select a country</option>
				              <option value="2">bangladesh</option>
				              <option value="3">Algeria</option>
				              <option value="4">Afghanistan</option>
				              <option value="5">Ghana</option>
				              <option value="6">Albania</option>
				              <option value="7">Bahrain</option>
				              <option value="8">Colombia</option>
				              <option value="9">Dominican Republic</option>
				            </select>
				        </div>
				        <div class="col-md-6 col-12 mb--20">                                 
				            <input type="text" placeholder="First Name">
				        </div>
				        <div class="col-md-6 col-12 mb--20">                             
				            <input type="text" placeholder="Last Name">
				        </div>
				        <div class="col-12 mb--20">                              
				            <input type="text" placeholder="Company Name">
				        </div>
				        <div class="col-12 mb--20">
				            <input placeholder="Street address" type="text">
				        </div>
				        <div class="col-12 mb--20">
				            <input placeholder="Apartment, suite, unit etc. (optional)" type="text">
				        </div>
				        <div class="col-12 mb--20">
				            <input placeholder="Town / City" type="text">
				        </div>
				        <div class="col-md-6 col-12 mb--20">                                 
				            <input type="text" placeholder="State / County">
				        </div>
				        <div class="col-md-6 col-12 mb--20">                                 
				            <input placeholder="Postcode / Zip" type="text">
				        </div>
				        <div class="col-md-6 col-12">                                 
				            <input type="email" placeholder="Email Address">
				        </div>
				        <div class="col-md-6 col-12">                                   
				            <input placeholder="Phone Number" type="text">
				        </div>                          
				    </div>
				</form>
		</div>
		<!-- /.shipping-content -->
		</transition>
	</div>
	<!-- /.shipping -->
</template>
<script>
	export default {
	  name: "ShippingForm",
	  data () {
	  	return {
	  		show: false
	  	}
	  },
	};
</script>
<style lang="sass">
	@import '../../assets/sass/paymentForm'
</style>