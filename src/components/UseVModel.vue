<template>
  <h2>This is my reactive variable : {{ count }}</h2>
  <h2>>This is my computed variable : {{ myComputedVariable }}</h2>
  This uses v-bind <input type="text" :value="count" /><br />
  This uses v-model <input type="text" v-model="count" /><br />
  <button @click="incrementCounter(1)">increment</button>
  <button @click="resetCounter()">reset</button>
</template>

<script lang="ts" setup>
import * as vue from "vue";
console.log("Component loaded in memory");

const count = vue.ref(0);

const myComputedVariable = vue.computed(() => {
  return count.value * 2;
});

const incrementCounter = (incrementBy: number) => {
  count.value += incrementBy;
};

// const decrementCounter = () => {
//   console.log("before decrement value");
//   count.value--;
//   console.log("after decrement value");
// };

const resetCounter = () => {
  count.value = 0;
};
</script>

<style></style>
