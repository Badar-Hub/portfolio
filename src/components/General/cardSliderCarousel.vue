<template>
  <div>
    <div class="carousel-slider">
        <carousel>
          <slide style="max-width:350px">
            <img src="@/assets/img/brand-logo/ultradent.png" />
          </slide>
          <slide style="max-width:350px">
            <img src="@/assets/img/brand-logo/ultradent.png" />
          </slide>
          <slide style="max-width:350px">
            <img src="@/assets/img/brand-logo/ultradent.png" />
          </slide>
          <slide style="max-width:350px">
            <img src="@/assets/img/brand-logo/ultradent.png" />
          </slide>
          <slide style="max-width:350px">
            <img src="@/assets/img/brand-logo/ultradent.png" />
          </slide>
          <slide style="max-width:350px">
            <img src="@/assets/img/brand-logo/ultradent.png" />
          </slide>
        </carousel>
    </div>
  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  }
};

</script>

<style scoped>
img{
    max-width: 150px;
}
.carousel-slider{
  display: flex;
  max-width: 1200px;
  margin: auto;
}
</style>