<template>
	<div class="billing">
		<div class="billing__title" @click='show = !show'>1. Billing information</div>
		<transition name="slide-fade">
		<form action="#" v-show='show' name='billing' class="billing-form">
		    <div class="row">
		        <div class="col-md-6 col-12">                                 
		            <input type="text" placeholder="First Name">
		        </div>
		        <div class="col-md-6 col-12">                             
		            <input type="text" placeholder="Last Name">
		        </div>
		        
		        <div class="col-12">
		            <input placeholder="Street address" type="text">
		        </div>
		        
		        <div class="col-12">
		            <input placeholder="Town / City" type="text">
		        </div>
		        
		        
		        <div class="col-md-6 col-12">                                 
		            <input type="email" placeholder="Email Address">
		        </div>
		        <div class="col-md-6 col-12">                                   
		            <input placeholder="Phone Number" type="text">
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