<template>
  <div>
      <bar/>
      <header-view/>
      <slider>
        <q-carousel-slide :name="1" :style="`background-image: url(${require(`@/assets/img/slider/02.jpg`)})`" />
      </slider>
      <img class="brand-img" src="@/assets/img/brand-logo/astra.jpg" alt="astra">
      <div class="brand-info">
        <p>The world's leading trade fair for the entire cosmetics and professional beauty industry. With 3 exhibitions dedicated to specific sectors and distribution channels, every year it attracts 2,300 exhibitors from 70 countries and over 170,000 visitors.</p>
      </div>
      <photoGrid img1="astra/01.jpg" img2="astra/02.jpg" img3="astra/03.jpg" img4="astra/04.jpg" img5="astra/05.jpg" img6="astra/06.jpg"/>
      <footerview />
  </div>
</template>

<script>
import Slider from '../components/General/Slider.vue'
import Bar from '../components/Layout/bar.vue'
import HeaderView from '../components/Layout/Header-View.vue'
import footerview from '../components/Layout/footer.vue'
import PhotoGrid from '../components/General/photoGrid.vue'
export default {
  components: { HeaderView ,Slider, Bar, footerview, PhotoGrid },

}
</script>

<style scoped>
.brand-img{ 
    display: flex;
    max-width: 400px;
    margin: auto;
    padding: 40px 0;
}
.brand-info {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: auto;
    text-align: center;
}
</style>