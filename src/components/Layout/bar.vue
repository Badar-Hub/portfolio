<template>
  <div>
      <div class="bar">
        <div class="subbar">
            <div class="row">
                <h3>Call Us Today! +923335801868</h3> <h3> | </h3> <h3> info@buruj.pk </h3> <h3> | </h3> <h3> Contact Us </h3>
            </div>
            <div class="row">
                <h3>Let's stay connected:</h3>
                <a href="#"><img class="icon" src="@/assets/img/png/facebook.png" /></a> 
                <a href=""><img class="icon" src="@/assets/img/png/twitter.png" /></a>
                <a href=""><img class="icon" src="@/assets/img/png/youtube.png" /></a>
                <a href=""><img class="icon" src="@/assets/img/png/instagram.png" /></a>
            </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.bar{
    background-color: #5c0931;
}
.subbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 40px;
    color: white;
}
.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.icon{
    width:33px;
    height:33px;
    margin:auto; 
}
a {
    padding-right: 10px;
    margin: auto;
}
</style>

