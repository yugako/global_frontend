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
			            <input type="text" id="card-number" />
			        </div>
			        <div class="input-box col-12">
			            <div class="row">
			                <div class="input-box col-12">
			                    <label>Expiration Date *</label>
			                </div>
			                <div class="input-box col-md-6 col-12 mb--20">
			                    <select>
			                        <option>Month</option>
			                        <option>Jan</option>
			                        <option>Feb</option>
			                        <option>Mar</option>
			                        <option>Apr</option>
			                        <option>May</option>
			                        <option>Jun</option>
			                        <option>Jul</option>
			                        <option>Aug</option>
			                        <option>Sep</option>
			                        <option>Oct</option>
			                        <option>Nov</option>
			                        <option>Dec</option>
			                    </select>
			                </div>
			                <div class="input-box col-md-6 col-12 mb--20">
			                    <select>
			                        <option>Year</option>
			                        <option>2015</option>
			                        <option>2016</option>
			                        <option>2017</option>
			                        <option>2018</option>
			                        <option>2019</option>
			                        <option>2020</option>
			                        <option>2021</option>
			                        <option>2022</option>
			                        <option>2023</option>
			                    </select>
			                </div>
			            </div>
			        </div>
			        <div class="input-box col-12">
			            <label for="card-Verify">Card Verification Number *</label>
			            <input type="text" id="card-Verify" />
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
	  		picked: ''
	  	}
	  },
	};
</script>
<style lang="sass">
	@import '../../assets/sass/paymentForm'
</style>