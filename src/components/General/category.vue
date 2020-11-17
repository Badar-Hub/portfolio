<template>
  <div>
      <div class="category-main">
          <div class="category">
              <img src="@/assets/img/innovative-products.png" alt="ideas">
              <h2>INNOVATIVE PRODUCTS</h2>
              <p>QUALITY BRANDS FROM AROUND THE WORLD!</p>
          </div>
          <div class="category">
              <img src="@/assets/img/market-presentation.png" alt="marketing">
              <h2>MARKET PENETRATION</h2>
              <p>QUALITY BRANDS FROM AROUND THE WORLD!</p>
          </div>
          <div class="category">
              <img src="@/assets/img/iconfinder_scoring-satisfaction-point-star-level_3709731.png" alt="satisfaction">
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
.category-main {
    display: flex;
    max-width: 1200px;
    justify-content: center;
    margin: auto;
    padding: 40px 0;
}
.category {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: auto;
    width: 50%;
}
h3{
    font-size: 18px;
    font-weight: bold;
    margin: auto;
}
p{
    font-size: 14px;
    margin: auto;
}
img{
    margin: auto;
    background-color: rgb(139, 139, 139);
    border-radius: 50%;
    width: 100%;
    max-width: 200px;
}
</style>