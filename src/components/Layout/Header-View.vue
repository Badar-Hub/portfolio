<template>
  <div class="mainHeader">
      <div class="headerview">
          <a href="/"><img class="logo" src="@/assets/img/logo.jpg" alt="logo"></a>
          <div class="navi">
            <nav>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#/about">About Us</a></li>
                    <li><a href="/#/about">Dental</a></li>
                    <li><a href="/#/about">Hydrate</a></li>
                    <li><a href="/#/about">Medical</a></li>
                    <li><a href="/#/about">Multivitamin</a></li>
                    <li><a href="/#/about">Food Items</a></li>
                    <li><a href="/#/about">Footwear</a></li>
                    <li><a href="/#/about">Optics</a></li>
                    <li><a href="/#/brands">Watches</a></li>
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
    padding-left: 30px;
    list-style-type: none;
}

a{
    color: black;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    text-decoration: underline;
}
.logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 300px;
}
</style>