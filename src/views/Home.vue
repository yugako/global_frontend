<template>
  <section class="home">
    	<Banner class='home-banner' mainPage='true' text='Best food service'/>
      <div class="fd">
        <div class="container">
          <div class="fd__content">
            <div class="fd__subtitle">The process of our service</div>
            <!-- /.fd__subtitle -->
            <div class="fd__title">How it work</div>
            <!-- /.fd__title -->
            <div class="fd-items">
              <div class="fd-item">
                <div class="fd-item__header">
                  <img src="../assets/img/home/1.png" alt="" class="fd-item__img">
                  <div class="fd-item__title">Choose restaurant</div>
                  <!-- /.fd-item__title -->
                </div>
                <!-- /.fd-item__header -->
                <div class="fd-item__content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
                <!-- /.fd-item__content -->
              </div>
              <!-- /.fd__item -->
              <div class="fd-item">
                <div class="fd-item__header">
                  <img src="../assets/img/home/2.png" alt="" class="fd-item__img">
                  <div class="fd-item__title">Select, you love to eat</div>
                  <!-- /.fd-item__title -->
                </div>
                <!-- /.fd-item__header -->
                <div class="fd-item__content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
                <!-- /.fd-item__content -->
              </div>
              <!-- /.fd__item -->
              <div class="fd-item">
                <div class="fd-item__header">
                  <img src="../assets/img/home/3.png" alt="" class="fd-item__img">
                  <div class="fd-item__title">Pickup or delivery</div>
                  <!-- /.fd-item__title -->
                </div>
                <!-- /.fd-item__header -->
                <div class="fd-item__content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
                <!-- /.fd-item__content -->
              </div>
              <!-- /.fd__item -->
            </div>
            <!-- /.fd__items -->
          </div>
          <!-- /.fd__content -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.fd -->
   </section>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";

export default {
  name: "home",
  data () {
  	return {

  	}
  },
  components: {
    Banner
  }
};
</script>
<style lang="sass">
  @import '../assets/sass/home'
</style>