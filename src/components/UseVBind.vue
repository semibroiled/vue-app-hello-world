<template>
  <h2>This is my reactive variable : {{ count }}</h2>
  <h2>>This is my computed variable : {{ myComputedVariable }}</h2>
  <input type="text" v-bind:value="count" />
</template>

<script lang="ts" setup>
import * as vue from "vue";
console.log("Component loaded in memory");

const count = vue.ref(0);
const timer = vue.ref(0);

const myComputedVariable = vue.computed(() => {
  return count.value * 2;
});

const incrementCounter = () => {
  console.log("before increment value");
  count.value++;
  console.log("after increment value");
};

// const decrementCounter = () => {
//   console.log("before decrement value");
//   count.value--;
//   console.log("after decrement value");
// };

// const resetCounter = () => {
//   count.value = 0;
// };

const startTimer = () => {
  timer.value = setInterval(function () {
    incrementCounter();
  }, 1000);
};

const stopTimer = () => {
  console.log("STOP COUNTER");
  clearInterval(timer.value);
};
// Lifecycle Methods
vue.onBeforeMount(() =>
  console.log("Vue Component ClickCounter.vue about to be mounted on DOM")
);

vue.onMounted(() => {
  console.log("Vue Component ClickCounter.vue mounted on DOM");
  startTimer();
});

vue.onBeforeUpdate(() =>
  console.log("Vue Component ClickCounter.vue about to be Updated")
);

vue.onUpdated(() => console.log("Vue Component ClickCounter.vue Updated"));

vue.onBeforeUnmount(() =>
  console.log("Vue Component ClickCounter.vue about to be Unmounted")
);

vue.onUnmounted(() => {
  stopTimer();
  console.log("Vue Component ClickCounter.vue unmounted");
});
</script>

<style></style>
