<template>
  <div>
      <div class="main-category">
          <div class="category">
              <div class="img">
                <img src="@/assets/img/innovative-products.png" alt="ideas">
              </div>
              <h2>INNOVATIVE PRODUCTS</h2>
              <p>QUALITY BRANDS FROM AROUND THE WORLD!</p>
          </div>
          <div class="category">
              <div class="img">
                  <img src="@/assets/img/market-presentation.png" alt="marketing">
              </div>
              <h2>MARKET PENETRATION</h2>
              <p>QUALITY BRANDS FROM AROUND THE WORLD!</p>
          </div>
          <div class="category">
              <div class="img">
                <img src="@/assets/img/iconfinder_scoring-satisfaction-point-star-level_3709731.png" alt="satisfaction">
              </div>
              <h2>CLIENT SATISFACTION</h2>
              <p>QUALITY BRANDS FROM AROUND THE WORLD!</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-category {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    max-width: 1200px;
    margin: auto;
    padding: 3% 0;
}

.category {
    text-align: center;
}

.category img{
    background-color: rgb(172, 172, 172);
    border-radius: 50%;
}

.img {
    background-color: white;
}
</style>

