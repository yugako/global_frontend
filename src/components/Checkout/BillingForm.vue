<template>
	<div class="billing">
		<div class="billing__title" @click='show = !show'>1. Billing information</div>
		<transition name="slide-fade">
		<form action="#" v-show='show' name='billing' class="billing-form">
		    <div class="row">
		        <div class="col-md-6 col-12">
		        	<label for="fname">First name*</label>                                 
		            <input name="First name" id="fname" type="text" placeholder="First Name">
		        </div>
		        <div class="col-md-6 col-12">
		        <label for="lname">Last name*</label>                              
		            <input name="Last name" id="lname" type="text" placeholder="Last Name">
		        </div>
		        
		        <div class="col-12">
		        	<label for="adress">Adress*</label>
		            <input name="Address" id="adress" placeholder="Address" type="text">
		        </div>
		        
		        <div class="col-md-6 col-12">
		        	<label for="mail">Email*</label>                                 
		            <input name="Email" id="mail" type="email" placeholder="Email Address">
		        </div>
		        <div class="col-md-6 col-12"> 
		        	<label for="number">Phone number*</label>                                  
		            <input name="Number" id="number" placeholder="Phone Number" type="text">
		        </div>                          
		    </div>
		</form>
	</transition>
	</div>
	<!-- /.billing -->
	
</template>
<script>
	export default {
	  name: "BillingForm",
	  data () {
	  	return {
	  		show: true
	  	}
	  },
	};
</script>
<style lang="sass">
	@import '../../assets/sass/billingForm'
</style>