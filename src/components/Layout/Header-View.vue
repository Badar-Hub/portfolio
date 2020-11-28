<template>
  <div class="mainHeader">
      <div class="headerview">
          <a href="/"><img class="logo" src="@/assets/img/logo.png" alt="logo"></a>
          <div class="navi">
            <nav class="desktop">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#/about">About Us</a></li>
                    <li><a href="/#/dental">Dental</a></li>
                    <li><a href="/#/hydrate">Hydrate</a></li>
                    <li><a href="/#/medical">Medical</a></li>
                    <li><a href="/#/multivitamin">Multivitamin</a></li>
                    <li><a href="/#/fooditems">Food Items</a></li>
                    <li><a href="/#/footwear">Footwear</a></li>
                    <li><a href="/#/optics">Optics</a></li>
                    <li><a href="/#/watches">Watches</a></li>
                    <li><a href="/#/contact-us">Contact Us</a></li>
                  </ul>
            </nav>
            <nav class="mobile">
                <ul class="mobile">
                    <li><a href="/">Home mobile</a></li>
                    <li><a href="/#/about">About Us</a></li>
                    <li><a href="/#/dental">Dental</a></li>
                    <li><a href="/#/hydrate">Hydrate</a></li>
                    <li><a href="/#/medical">Medical</a></li>
                    <li><a href="/#/multivitamin">Multivitamin</a></li>
                    <li><a href="/#/fooditems">Food Items</a></li>
                    <li><a href="/#/footwear">Footwear</a></li>
                    <li><a href="/#/optics">Optics</a></li>
                    <li><a href="/#/watches">Watches</a></li>
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

.mobile {
    display: none;
}

@media (max-width: 768px) {
    .desktop {
        display: none;
    }
    .mobile {
        display: flex;
        flex-direction: column;
    }
    .mobile li{
        display: flex;
        flex-direction: row;
    }
}

</style>