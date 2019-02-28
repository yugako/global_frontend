<template>
	<div class="container mb-5">
		<div class="wrapper-nav pt-2 pb-2 pl-5 pr-5">
			<div class="row justify-content-between flex-lg-row flex-column align-items-center">
			<div class="logo mb-2 mb-lg-0">
				<router-link to='/'>
					<img src="../../assets/img/logo/3.png" alt="">
				</router-link>
				
			</div>
			<nav v-if='!logged' class="nav mb-2 mb-lg-0">
				<router-link class='nav-link' exact active-class='active' to='/'>
					Home
				</router-link>
				<router-link class='nav-link' active-class='active' to='/menu'>
					Menu
				</router-link>
				<router-link class='nav-link' active-class='active' to='/cart'>
					Cart
				</router-link>
			</nav>
			<div class="account mb-2 mb-lg-0">
				<template v-if='logged'>
					<a class="account__link" @click='logout()'>
						LogOut
						<img class="account__image" src="../../assets/img/icons/sign-out.svg" alt="">
					</a>
				</template>
				<template v-else>
					<a class="account__link" @click='showForm()'>
						<img class="account__image" src="../../assets/img/icons/user.svg" alt="">
					</a>
					<a class="account__link" @click='showPreview()'>
						<img class="account__image" src="../../assets/img/icons/cart.svg" alt="">
						<span class="count">{{this.$store.state.cart.countItems}}</span>
					</a>
				</template>
			</div>
			<!-- /.account -->
		</div>
		<!-- /.row -->
		</div>
		<!-- /.wrapper-nav -->
		<!-- User login/register -->
		<overlayLogin />
		<!-- End user login/register -->
		<!-- Start order preview -->

		<cartPreview v-if='this.$store.state.cart.cartPreview' />
	</div>
</template>
<script>
// @ is an alias to /src
import overlayLogin from '@/components/Signin/overlayLogin.vue';
import cartPreview from '@/components/Navigation/cartPreview.vue';

export default {
  name: "navigation",
  beforeCreate: function() {
    this.$options.computed = {
       logged () {
       		return this.$store.getters.logged;
       },
       countTotalOrder () {
  		return this.$store.getters.countTotalOrder;
  	},
    }
  },
  data () {
  	return {
  		showOrderPreview: false,
  	}
  },
  methods: {
  	showPreview () {
  		this.$store.commit('showCartPreview');
  	},
  	showForm () {
  		this.$store.commit('showForm');
  	},
  	logout () {
  	    localStorage.removeItem('jwtToken');
  	    this.$store.commit('isLogOut');
  	    this.$router.push({
  	      name: 'home'
  	    })
  	  }
  	},
  	
  	components: {
    	overlayLogin,
    	cartPreview
  	}
};
</script>
<style lang="sass">
	@import '../../assets/sass/nav'
</style>
