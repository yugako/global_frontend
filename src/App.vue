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
    this.$store.dispatch("getWorkers")
    this.$store.dispatch("getOrders")         
  },
  components: {
    Navigation,
    Footer
  }
};
</script>
<style lang="sass">
  @import './assets/sass/main'
</style>

