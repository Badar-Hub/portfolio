<template>
  <div>
      <bar/>
      <header-view/>
      <slider>
        <q-carousel-slide :name="1" :style="`background-image: url(${require(`@/assets/img/slider/08.jpg`)})`" />
      </slider>
      <img class="brand-img" src="@/assets/img/brand-logo/sega.jpg" alt="sega">
      <div class="brand-info">
        <p>ABOUT STAR IMPACT PVT LTD Established in 1997, Star Impact Pvt. Ltd. is renowned Manufacturer and Exporter of wide range of Sports Shoes and Leather Articles. Our Product include Football Shoes, Cricket, Hockey, Ball Badminton, Athletic, Marathon Shoes, Footballs, Football Stocking etc. In a very short span of years, Star Impact has become one of the most signifcant name across the abroad markets. The success behind the ever increasing demand, popularity and acceptability of our products among professional, regular players and sports dealers lie behind the sole policy adopted by Star Impact Pvt. Ltd from the very beginning is to produce the most durable, comfortable and innovative products at highly affordable prices as compared to others.</p>
      </div>
      <photoGrid img1="sega/01.jpg" img2="sega/02.jpg" img3="sega/03.jpg" img4="sega/04.jpg" img5="sega/05.jpg" img6="sega/06.jpg"/>
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