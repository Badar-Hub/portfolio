<template>
  <div>
    <bar/>
    <hr style="margin:0px; color:black"/>
    <HeaderView />
    <hr style="margin:0px"/>
    <slider>
      <q-carousel-slide :name="1" img-src="https://www.natrol.pk/wp-content/uploads/2019/07/nsf1.jpg" />
      <q-carousel-slide :name="2" img-src="https://www.astramakeup.com/modules/jscomposer/uploads/pb-header.jpg" />
      <q-carousel-slide :name="3" img-src="https://www.segashoes.com/media/revslider/breeze.png" />
      <q-carousel-slide :name="4" img-src="https://floslek.pl/modules/anthemeblocks/images/5fec7d77da78d.jpg" />
      <q-carousel-slide :name="5" img-src="https://probalancepetfood.com/wp-content/uploads/2020/02/home-new-probalance-bg-img-2-842x532.png" />
    </slider>
    <hr style="margin:0px; color:black"/>
    <div>
      <TextAf>
        <h4>
          WE AT “BURUJ” BELIEVE IN PROVIDING OUR CUSTOMERS TOP QUALITY BRANDS OF DIFFERENT SPECIFICATIONS.
          WE BELIEVE IN QUALITY SERVICES TO OUR VALUED CLIENTS
       </h4>
      </TextAf>
      <hr style="color:black" />
    </div>
    <category />
    <footerview/>
  </div>
</template>

<script>
import bar from "../components/Layout/bar"
import HeaderView from "../components/Layout/Header-View"
import slider from '../components/General/Slider.vue'
import TextAf from '../components/General/textAF.vue'
import Category from '../components/General/category.vue'
import footerview from '../components/Layout/footer.vue'

export default {
  name: 'LayoutDefault',

  components: {
    bar,
    HeaderView,
    slider,
    TextAf,
    Category,
    footerview
  },

  data () {
    
  }
}
</script>

<style>
</style>
