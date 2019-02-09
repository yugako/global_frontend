<template>
	<div class="pay">
		<div class="pay-title" @click='show = !show'>3. Payment method</div>
		<!-- /.pay-title -->
		<transition name="slide-fade">
		<div class="pay-content" v-show='show'>
			<div class="pay-method">
				<label class="pay-method__label">
					<input type="radio" name="method">
					Check / Money Order
				</label>
				<label class="pay-method__label">
					<input type="radio" name="method">
					Credit card
				</label>
			</div>
			<!-- /.pay-method -->
			<form action="#" class="pay-form">
			    <div class="row">
			     
			        <div class="input-box col-12 mb--20">
			            <label for="card-number">Credit Card Number *</label>
			            <input type="text" id="card-number" />
			        </div>
			        <div class="input-box col-12">
			            <div class="row">
			                <div class="input-box col-12">
			                    <label>Expiration Date</label>
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
			            <a href="#">What is it ?</a>
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
	  		show: false
	  	}
	  },
	};
</script>
<style lang="sass">
	.pay

		&-form
			label
				display: block
				color: #959595
				font-size: 15px
			select
			    border: 1px solid #ededed
			    background-color: #ffffff
			    height: 40px
			    line-height: 24px
			    padding: 7px 15px
			    color: #959595
			    font-size: 15px
			    width: 100%
			    margin-bottom: 10px
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
			a
				color: #d50c0d
				font-size: 15px
				margin-top: 5px
		&-method
			&__label

			    text-transform: capitalize
			    cursor: pointer
			    margin-right: 50px
			    color: #959595
			    padding-top: 15px
		&-title
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
	.slide-fade-enter-active 
	  	transition: all .3s ease
	
	.slide-fade-leave-active 
	  	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
	
	.slide-fade-enter, .slide-fade-leave-to
	  	transform: translateY(10px)
	  	opacity: 0
</style>