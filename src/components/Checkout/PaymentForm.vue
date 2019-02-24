<template>
	<div class="pay">
		<div class="pay-title" @click='show = !show'>2. Payment method</div>
		<!-- /.pay-title -->
		<transition name="slide-fade">
		<div class="pay-content" v-show='show'>
			<div class="pay-method">
				<label class="pay-method__label">
					<input type="radio" value="cash" v-model='picked' name="method">
					Check / Money Order
				</label>
				<label class="pay-method__label">
					<input type="radio" value="card" v-model='picked' name="method">
					Credit card
				</label>
			</div>
			<!-- /.pay-method -->
			<form action="#" class="pay-form" v-if='picked === "card"'>
			    <div class="row">
			        <div class="input-box col-12 mb--20">
			            <label for="card-number">Credit Card Number *</label>
			            <input v-mask="'####-####-####-####'" v-model='cardNumber' type="text" id="card-number" />
			        </div>
			        <div class="input-box col-12">
			            <div class="row">
			                <div class="input-box col-12">
			                    <label>Expiration Date *</label>
			                </div>
			                <div class="input-box col-md-6 col-12 mb--20">
			                    <select>
			                        <option disabled selected>Month</option>
			                        <option v-for='month in months'>{{month}}</option>
			                    </select>
			                </div>
			                <div class="input-box col-md-6 col-12 mb--20">
			                    <select>
			                        <option disabled selected>Year</option>
			                        <option v-for='year in years'>{{year}}</option>
			                    </select>
			                </div>
			            </div>
			        </div>
			        <div class="input-box col-12">
			            <label for="card-Verify">Card Verification Number *</label>
			            <input v-mask="'###'" v-model='cvv' type="password" id="card-Verify" />
			            <a href="https://www.cvvnumber.com/">What is it ?</a>
			        </div>
			    </div>
			</form>
		</div>
		</transition>
	</div>
	<!-- /.pay -->
	
</template>
<script>
	export default {
	  name: "PaymentForm",
	  data () {
	  	return {
	  		show: false,
	  		cardNumber: '',
	  		cvv: '',
	  		picked: '',
	  		months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  		years: [2019,2020,2021,2022,2023],
	  	}
	  },
	};
</script>
<style lang="sass">
	@import '../../assets/sass/paymentForm'
</style>