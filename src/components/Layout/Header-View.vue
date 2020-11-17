<template>
  <div class="mainHeader">
      <div class="headerview">
          <img src="@/assets/img/logo.jpg" alt="logo">
          <div class="navi">
            <nav>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#/about">About Us</a></li>
                    <li><a href="/#/brands">Brands</a></li>
                    <li><a href="/#/contact-us">Contact Us</a></li>
                  </ul>
            </nav>
          </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.mainHeader{
    background-color: white;
}

.headerview {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 40px;
    justify-content: space-between;
}

.navi{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

ul{
    display: flex;
    flex-direction: row;
}

li{
    padding-left: 50px;
    list-style-type: none;
}

a{
    color: black;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>