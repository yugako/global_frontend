<template>
  <section class="menu">
  	<Banner class='menu-banner' text='MENU LIST VIEW' />
    <!-- /.menu-header -->
    <div class="menu-list">
    	<div class="container">
        <div class="menu-item" v-for='dish in dishesList'>
        <div class="row">
              <div class="col-12 col-lg-6">
                  <div class="menu-item__img">
                    <img src="@/assets/img/menu-list/placeImg.jpg" class="img-responsive" :alt="dish.title">
                  </div>
                  <!-- /.menu-list__img -->
              </div>
              <!-- /.col-12 col-lg-6 -->
            <div class="col-12 col-lg-6">
              <div class="menu-item__content">
                <div class="menu-item__header">
                  <div class="menu-item__title">
                      <h3 @click='goToDetail(dish._id)'>{{dish.title}}</h3>
                  </div>
                  <!-- /.menu-item__title -->
                  <div class="menu-item__price">
                    {{dish.price}}$
                  </div>
                  <!-- /.menu-item__price -->
                </div>
                <!-- /.menu-item__header -->
                <div class="menu-item__descr">
                  {{dish.excerpt}}
                </div>
                <!-- /.menu-item__descr -->
                <div class="menu-item__order">
                  <a class="menu-item__order_link" @click='goToDetail(dish._id)'>
                    Order now
                  </a>
                </div>
                <!-- /.menu-item__order -->
              </div>
              <!-- /.menu-list__content -->
            </div>
            <!-- /.col-12 col-lg-6 -->
          </div>
          <!-- /.menu-list__item -->
        </div>
        <!-- /.row -->
    		
    	</div>
    	<!-- /.container -->
    	
    </div>
    <!-- /.menu-list -->
  </section>
</template>
<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";

export default {
  name: "menu-list",
  data () {
  	return {}
  },
  methods: {
    goToDetail(dishId) {
        this.$router.push({name:'detail',params:{id:dishId}})
    }
  },
  computed : {
    dishesList(){
       return this.$store.getters.Dishes
    }
  },
  components: {
    Banner
  }
};
</script>
<style lang="sass">
	@import '../assets/sass/menu'
</style>