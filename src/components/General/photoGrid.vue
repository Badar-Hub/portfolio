<template>
  <div>
      <div class="grid-photo">
          <img :src="require(`@/assets/${img1}`)" />
          <img :src="require(`@/assets/${img2}`)" />
          <img :src="require(`@/assets/${img3}`)" />
          <img :src="require(`@/assets/${img4}`)" />
          <img :src="require(`@/assets/${img5}`)" />
          <img :src="require(`@/assets/${img6}`)" />
      </div>
  </div>
</template>

<script>
export default {
    props:{
        img1: {
            Type: String,
            required: false
        },
        img2: {
            Type: String,
            required: false
        },
        img3: {
            Type: String,
            required: false
        },
        img4: {
            Type: String,
            required: false
        },
        img5: {
            Type: String,
            required: false
        },
        img6: {
            Type: String,
            required: false
        },
    }
}
</script>

<style scoped>
.grid-photo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px ,1fr));
    max-width: 1200px;
    margin: auto;
    grid-gap: 20px;
}

img{
    max-width: 280px;
    padding: 1rem;
    margin: auto;
}
</style>