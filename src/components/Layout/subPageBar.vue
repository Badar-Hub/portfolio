<template>
  <div>
      <div class="subpagebarmain">
        <div class="subpagebar">
            <div class="inner">
                <h3>ABOUT US</h3>
            </div>
            <div class="inner">
                <h3>HOME/ABOUT US</h3>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.subpagebarmain{
    background-image: url(../../assets/img/pagetitlebar.png);
    width: 100%;
    height: 84px;
}
.subpagebar{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 84px;}

.inner{
    margin: auto 40px;
}

h3{
    margin: auto 0!important;
}

</style>