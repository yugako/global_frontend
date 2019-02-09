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

  .home-banner
    background-image: url('../assets/img/banner/main.jpg')
    span
      line-height: 40px
      vertical-align: middle
      text-align: center
      background-color: #d50c0d
      font-size: 60px!important
      padding: 15px
  .fd
    background-image: url('../assets/img/home/bg.jpg')
    padding-top: 100px
    padding-bottom: 100px
    &__subtitle
      color: #444444
      position: relative
      font-size: 16px
      margin-bottom: 15px
      &::before
        content: ''
        background-image: url('../assets/img/icons/shapes/1.png')
        background-repeat: no-repeat
        width: 45px
        height: 14px
        position: absolute
        left: 0
        top: -10px
    &__title
      font-size: 34px
      line-height: 30px
      font-weight: 400
      margin-bottom: 40px
      color: #444
    &__content
      background-color: #fff
      padding: 50px
    &-items
      display: flex
      justify-content: space-between
      align-items: flex-end
    &-item
      &__header
        display: flex
        align-items: flex-end
        margin-bottom: 15px
      &__title
        color: #444444
        font-size: 22px
        padding-left: 15px
        padding-right: 15px
        font-weight: bold
      &__content
      	color: #959595
      	font-size: 14px
      	padding-right: 10px
  @media(max-width: 992px)
  	.fd
  		&-items
  			display: block
</style>