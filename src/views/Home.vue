<template>
  <div>
    <bar>
      <h3>Call Us Today! +92 51 5707101</h3> <h3> | </h3> <h3> bilalenterprises@live.com </h3> <h3> | </h3> <h3> Contact Us </h3>
    </bar> 
    <hr style="margin:0px; color:black"/>
    <HeaderView />
    <hr style="margin:0px"/>
    <slider />
    <hr style="margin:0px; color:black"/>
    <div>
      <TextAf />
      <hr style="color:black" />
    </div>
    <category />
    <bar style="background-color:#282a2b; color:white; padding:5px">
      <h3>Copyright 2018 - 2019 Bilal Enterprises | All Rights Reserved</h3>
    </bar>
  </div>
</template>

<script>
import bar from "../components/Layout/bar"
import HeaderView from "../components/Layout/Header-View"
import slider from '../components/General/Slider.vue'
import TextAf from '../components/General/textAF.vue'
import Category from '../components/General/category.vue'
import Bar from '../components/Layout/bar.vue'

export default {
  name: 'LayoutDefault',

  components: {
    bar,
    HeaderView,
    slider,
    TextAf,
    Category,
    Bar
  },

  data () {
    
  }
}
</script>

<style>
</style>
