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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.starbox{
  div{
    text-align: center;
    font-size:20px;
    color:#8E2DE2;
    font-weight: 600;
    margin-bottom:20px;
  }
  img{
    width:400px;
    margin: 0 10px;
  }
}
</style>
