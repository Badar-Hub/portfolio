<template>
  <div>
      <bar/>
      <header-view/>
      <slider>
        <q-carousel-slide :name="1" img-src="https://www.natrol.pk/wp-content/uploads/2019/07/nsf1.jpg" />
      </slider>
      <img class="brand-img" src="@/assets/img/brand-logo/natrol.png" alt="natrol">
      <div class="brand-info">
          <p>Natrol® was born from a passion to improve human wellness worldwide. Initially founded in 1980 by Elliott Balbert as a cosmetics company, Natrol has evolved into a leader and one of the most recognized brands within the Vitamin, Mineral and Supplement category, with operations in over 60 countries worldwide.</p>
      </div>
      <photoGrid img1="natrol/01.jpg" img2="natrol/02.jpg" img3="natrol/03.jpg" img4="natrol/04.jpg" img5="natrol/05.jpg" img6="natrol/06.jpg"/>
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