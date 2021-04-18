<template>
  <div>
    <bar/>
    <hr style="margin:0px; color:black"/>
    <HeaderView />
    <hr style="margin:0px"/>
    <slider>
      <q-carousel-slide :name="1" :style="`background-image: url(${require(`@/assets/img/slider/02.jpg`)})`" />
      <q-carousel-slide :name="2" :style="`background-image: url(${require(`@/assets/img/slider/07.jpg`)})`" />
      <q-carousel-slide :name="3" :style="`background-image: url(${require(`@/assets/img/slider/04.jpg`)})`" />
      <q-carousel-slide :name="4" :style="`background-image: url(${require(`@/assets/img/slider/08.jpg`)})`" />
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
  }
}
</script>

<style>
</style>
