<template>
  <div id="app">
    <Navigation />
    <transition name='bounce'>
      <router-view />
    </transition>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "home",
  created() {
    this.$store.dispatch("getDishes")       
  },
  components: {
    Navigation,
    Footer
  }
};
</script>
<style lang="sass">
  @import './assets/sass/main'

  .bounce-enter-active 
        animation: bounce-in .5s
  
  .bounce-leave-active 
        animation: bounce-in .5s reverse
  
  @keyframes bounce-in 
        0% 
            transform: scale(0)
        
        50% 
            transform: scale(1.5)
        
        100% 
            transform: scale(1)
    
  
</style>

