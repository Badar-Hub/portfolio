<template>
  <div>
    <bar />
    <header-view />
    <slider>
     <q-carousel-slide :name="1" :style="`background-image: url(${require(`@/assets/img/slider/07.jpg`)})`" />
    </slider>
    <img
      class="brand-img"
      src="@/assets/img/brand-logo/probalance.png"
      alt="probalance"
    />
    <div class="brand-info">
      <p><strong>Who is ProBalance?</strong></p>
      <p>
        High quality proteins & a range of superfoods such as blueberries,
        cranberries, fish oils and yucca are carefully selected for their key
        nutritional benefits. These form the base of our recipes and work in
        tandem with ActivBlend, our proprietary mix of vitamins & minerals, to
        deliver a nutritionally rich complete & balanced food.
      </p>
    </div>
    <photoGrid
      img1="probalance/01.png"
      img2="probalance/02.png"
      img3="probalance/03.png"
      img4="probalance/04.png"
      img5="probalance/05.png"
      img6="probalance/06.png"
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
