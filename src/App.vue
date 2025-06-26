<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <input type="text" v-model="name" />
  <MyCountries :name="name" />
</template>

<script setup lang="ts">
import MyCountries from "./components/Chapter_4/MyCountries.vue";

import { ref } from "vue";

const name = ref("");

//   init?: number;
//   end?: number;
// };

// const limits: Limit[] = [
//   { init: 5, end: 10 },
//   { init: 1, end: 5 },
//   { init: 10 },
//   { end: 10 },
// ];
// const count = vue.ref(0);
// const doubleCount = vue.computed(() => {
//   return count.value * 2;
// });

// const incrementCounter = () => {
//   console.log("before increment value");
//   count.value++;
//   console.log("after increment value");
// };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
