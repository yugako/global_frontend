<template>
	<section class="checkout">
		<Banner text='Checkout Page' class='checkout-banner' />
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="payment">
						<div class="payment-item">
							<BillingForm />
						</div>
						<!-- /.payment-item -->
						<div class="payment-item">
							<ShippingForm />
						</div>
						<!-- /.payment-item -->
						<div class="payment-item">
							<PaymentForm />
						</div>
						<!-- /.payment-item -->
					</div>
					<!-- /.payment -->
				</div>
				<div class="col-lg-6">
					<div class="checkout-details">
						<div class="checkout-details__title">YOUR ORDER</div>
						<!-- /.checkout-details__title -->
						<SummaryOrder/>
					</div>
					<!-- /.checkout-details -->
				</div>
			</div>
		</div>
	</section>
	<!-- /.checkout -->
</template>
<script>
	// @ is an alias to /src
	import Banner from "@/components/Banner.vue";
	import BillingForm from "@/components/Checkout/BillingForm.vue";
	import ShippingForm from "@/components/Checkout/ShippingForm.vue";
	import PaymentForm from "@/components/Checkout/PaymentForm.vue";
	import SummaryOrder from "@/components/Checkout/SummaryOrder.vue";

	export default {
	  name: "menu",
	  data () {
	  	return {

	  	}
	  },
	  components: {
	    Banner,
	    BillingForm,
	    ShippingForm,
	    PaymentForm,
	    SummaryOrder
	  }
	};
</script>
<style lang="sass">
	.checkout
		&-banner
			background-image: url('../assets/img/banner/main.jpg')
		&-details, .payment
			margin-top: 50px
			margin-bottom: 50px
			&__title
				background: #d50c0d
				color: #ffffff
				display: block
				font-size: 14px
				font-weight: 700
				height: 45px
				line-height: 45px
				padding: 0 12px 0 28px
				text-transform: uppercase
				width: 100%
				margin: 0
	

	.submit
		float: right
		border-radius: 5px
		font-family: "Alegreya", serif
		font-size: 18px
		line-height: 45px
		padding: 0 22px
		text-transform: capitalize
		color: #444
		border: none
		background-color: #f2f2f2
		cursor: pointer
		transition: 0.6s
		font-weight: bold
		&:hover
			background-color: #d50c0d
			color: #fff
			transition: 0.6s
	.payment
		&-item
			margin-bottom: 20px
</style>