<template>
  <div class="main-bar">
      <div class="bar">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.main-bar{
    background-color: #c37952;
}

.bar{
    display: flex;
    flex-direction: row;
    margin: 0 40px;
    color: white;
}

h4 {
    font-size: 12px;
    margin: 0px!important;
    padding-right: 10px;
    font-weight: bold;
}
a {
    font-size: 12px;
}
</style>