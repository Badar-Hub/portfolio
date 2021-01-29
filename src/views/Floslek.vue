<template>
  <div>
    <bar />
    <header-view />
    <slider>
      <q-carousel-slide :name="1" :style="`background-image: url(${require(`@/assets/img/slider/04.jpg`)})`" />
    </slider>
    <img
      class="brand-img"
      src="@/assets/img/brand-logo/floslek.svg"
      alt="Floslek"
    />
    <div class="brand-info">
      <p><strong>Who is FLOSLEK?</strong></p>
      <p>
        FLOSLEK is a Polish cosmetics brand, built on the synergy of the latest
        developments in the field of cosmetology and what is the best in nature.
      </p>
    </div>
    <photoGrid
      img1="floslek/01.jpg"
      img2="floslek/02.jpg"
      img3="floslek/03.jpg"
      img4="floslek/04.jpg"
      img5="floslek/05.jpg"
      img6="floslek/06.jpg"
    />
    <footerview />
  </div>
</template>

<script>
import Slider from "../components/General/Slider.vue";
import Bar from "../components/Layout/bar.vue";
import HeaderView from "../components/Layout/Header-View.vue";
import footerview from "../components/Layout/footer.vue";
import PhotoGrid from "../components/General/photoGrid.vue";
export default {
  components: { HeaderView, Slider, Bar, footerview, PhotoGrid },
};
</script>

<style scoped>
.brand-img {
  display: flex;
  max-width: 300px;
  margin: auto;
  padding: 40px 0;
}
.brand-info {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
}
</style>
