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
	@import '../assets/sass/payment'
</style>