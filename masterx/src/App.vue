<template>
  <div id="app">
    <div id="nav">
      
      <div @click="onChangePage('/star/linjunjie')" >林俊杰</div>
      <div @click="onChangePage('/star/zhangyixin')" >张艺兴</div>
   
    </div>

     <div id="subView" class="sub-content-wrap" v-html="content"></div>
  </div>
</template>

<script>

  import { mapState } from 'vuex';
  export default{
    data(){
      return {
     
      }
    },
    computed:{
       ...mapState('microApp', ['content']),
       ...mapState('microApp', ['mircoAppLoading']),
    },

    methods:{
      onChangePage(url){
        console.log(url)
        
        this.routerGo(url, '我喜爱的男明星')
      },
  
      routerGo(href = '/', title = null, stateObj = {}) {
        window.history.pushState(stateObj, title, href); 
      },
    }

   

  }
</script>

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
  display: flex;
  justify-content: center;

  div {
    margin: 0 10px;
    font-weight: bold;
    font-size:30px;
    color: #42b983;
  
  }
}

// .sub-content-wrap{
//   width: 100%;
//   height: calc(100% -60px);
//   overflow: auto;
// }
</style>
