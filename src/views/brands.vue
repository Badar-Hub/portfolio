<template>
  <div>
      <bar/>
      <header-view/>
      <slider/>
      <img class="brand-img" src="@/assets/img/brand-logo/ultradent.png" alt="ultradent">
      <div class="brand-info">

           <p><strong>Who is Ultradent?</strong></p> 
           <p>Our passion to improve oral health has made Ultradent into the incredible company it is today. Ultradent is a global dental and orthodontic manufacturing company that has experienced non-stop growth for over 30 years, and is driven for continued growth! </p> 
      </div>
      <card-slider-carousel/>
      <footerview />
  </div>
</template>

<script>
import Slider from '../components/General/Slider.vue'
import Bar from '../components/Layout/bar.vue'
import HeaderView from '../components/Layout/Header-View.vue'
import footerview from '../components/Layout/footer.vue'
import CardSliderCarousel from '../components/General/cardSliderCarousel.vue'
export default {
  components: { HeaderView ,Slider, Bar, footerview, CardSliderCarousel },

}
</script>

<style scoped>
.brand-img{ 
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