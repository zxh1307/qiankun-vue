<template>
  <div class="starbox">
    <div>林俊杰的铁粉 哈哈!!!!</div>

    <img v-for="item in [1,2,3,4,5,6] " :key="item" :src=" require(`../assets/linjunjie${item}.jpg`)" />
  </div>
</template>

