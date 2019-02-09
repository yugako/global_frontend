<template>
	<div class="billing">
		<div class="billing__title" @click='show = !show'>1. Billing information</div>
		<transition name="slide-fade">
		<form action="#" v-show='show' class="billing-form">
		    <div class="row">
		        <div class="col-12">
		            <select>
		              <option value="1">Select a country</option>
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
		        <div class="col-md-6 col-12">                                 
		            <input type="text" placeholder="First Name">
		        </div>
		        <div class="col-md-6 col-12">                             
		            <input type="text" placeholder="Last Name">
		        </div>
		        <div class="col-12">                              
		            <input type="text" placeholder="Company Name">
		        </div>
		        <div class="col-12">
		            <input placeholder="Street address" type="text">
		        </div>
		        <div class="col-12">
		            <input placeholder="Apartment, suite, unit etc. (optional)" type="text">
		        </div>
		        <div class="col-12">
		            <input placeholder="Town / City" type="text">
		        </div>
		        <div class="col-md-6 col-12">                                 
		            <input type="text" placeholder="State / County">
		        </div>
		        <div class="col-md-6 col-12">                                 
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
	</transition>
	</div>
	<!-- /.billing -->
	
</template>
<script>
	export default {
	  name: "BillingForm",
	  data () {
	  	return {
	  		show: false
	  	}
	  },
	};
</script>
<style lang="sass">
	.billing
		&__title
			background-color: #f1f2f3
			color: #333
			display: block
			font-size: 15px
			font-weight: 700
			height: 47px
			line-height: 49px
			padding: 0 12px 0 28px
			position: relative
			text-align: left
			text-transform: uppercase
			width: 100%
			font-family: "Open Sans", sans-serif
			cursor: pointer
		&-form
			padding-top: 15px
			padding-bottom: 15px
			select
				width: 100%
				border: 1px solid #ededed
				background-color: #ffffff
				line-height: 24px
				padding: 7px 15px
				color: #959595
				margin-bottom: 10px
				font-size: 15px
			input
			    border: 1px solid #ededed
			    background-color: #ffffff
			    height: 40px
			    line-height: 24px
			    padding: 7px 15px
			    color: #959595
			    font-size: 15px
			    width: 100%
			    margin-bottom: 10px
	.slide-fade-enter-active 
	  	transition: all .3s ease
	
	.slide-fade-leave-active 
	  	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
	
	.slide-fade-enter, .slide-fade-leave-to
	  	transform: translateY(10px)
	  	opacity: 0
</style>