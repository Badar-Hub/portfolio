<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.smrow{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.grrow{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin: auto;
  padding: 20px 8px;
}

.grrow img{
  max-width: 250px;
  margin: auto;
}

.flexcol{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

p{
  font-size: 14px;
  font-weight: 500!important;
}

h4 {
  font-size: 1rem!important;
  font-weight: 900!important;
}

h3 {
  font-size: 0.9rem!important;
  margin: 0px!important;
  padding-right: 10px;
  font-weight: bold;
}

h2{
    font-size: 1.2rem!important;
    font-weight: bold!important;
    margin: auto;
}
</style>
