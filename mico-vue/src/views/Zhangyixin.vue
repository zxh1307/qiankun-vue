<template>
  <div class="starbox">
    <div> 小绵羊 哈哈!!!!</div>

    <img v-for="item in [1,2,3,4,5,6] " :key="item" :src=" require(`../assets/zhangyixin${item}.jpg`)" />
  </div>
</template>
