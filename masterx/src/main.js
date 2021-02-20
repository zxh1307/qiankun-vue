/*
 * @Author: ningbo.kang
 * @Date: 2021-02-20 14:12:34
 * @LastEditors: ningbo.kang
 * @LastEditTime: 2021-02-20 14:31:53
 * @Description: 描述
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 导入乾坤函数
import {
  registerMicroApps,
  setDefaultMountApp,
  start
} from "qiankun";

Vue.config.productionTip = false



function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

let app = null;

function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
    
  } else {
    store.commit('microApp/changeCenter', appContent);
    store.commit('microApp/changeLoading', loading);
  }

}

 //第一次调用初始主应用
render({}) 

let msg = {
  data:'修炼爱情的辛酸,学会放好以前的渴望'
}

let apps = [
  {
    name: 'linjunjie', 
    entry: '//localhost:9000', 
    container:'#subView', 
    // render:renderUtil.render, 
    activeRule: genActiveRule('/star'),
    props:msg
  }
]


   //注册的子应用 参数为数组
registerMicroApps(apps,{
  beforeLoad: [
    app => {
      console.log(app)
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
});


setDefaultMountApp('/star/linjunjie')

start({ 
   sandbox :{strictStyleIsolation: true}
})



