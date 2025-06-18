<template>
  <h2>Date {{ date }} formatted to {{ date_MMDDYYY }}</h2>
  <br />
  <h3>This is my counter that counts the clicks you clack</h3>
  <button @click="stopTimer()">Click here to stop count!</button>
  <button @click="decrementCounter()">Decrement</button>
  <button @click="incrementCounter()">Increment</button>
  <button @click="resetCounter()">Reset</button>
  <br />
  <button @click="startTimer()">Start Timer</button>
  <h2>This is my reactive variable : {{ myMaximumReactiveVariable }}</h2>
  <h2>This is my computed variable : {{ myComputedVariable }}</h2>
</template>

<script lang="ts" setup>
import * as vue from "vue";
import getCountUptoMaximum from "../composables/getCountUptoMaximum";
import useDateFromat from "../composables/useDateFormat";
console.log("Component loaded in memory");

const date = new Date();

const date_MMDDYYY = useDateFromat(date, "MM-DD-YYYY");

const myMaximumReactiveVariable = getCountUptoMaximum(10);
// const myCounter = vue.customRef((track, trigger) => {
//   let trackedVariable = 0;

//   return {
//     get() {
//       track();
//       console.log("get trackedVariable =", trackedVariable);
//       return trackedVariable;
//     },
//     set(newValue) {
//       trackedVariable = newValue;
//       trigger();
//       console.log("set value =", trackedVariable);
//     },
//   };
// });
const timer = vue.ref(0);

const myComputedVariable = vue.computed(() => {
  return myMaximumReactiveVariable.value * 2;
});

const incrementCounter = () => {
  console.log("before increment value");
  myMaximumReactiveVariable.value = myMaximumReactiveVariable.value + 1;
  console.log("after increment value");
};

const decrementCounter = () => {
  console.log("before decrement value");
  myMaximumReactiveVariable.value--;
  console.log("after decrement value");
};

const resetCounter = () => {
  myMaximumReactiveVariable.value = 0;
};

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
  // startTimer();
});

vue.onBeforeUpdate(() =>
  console.log("Vue Component ClickCounter.vue about to be Updated")
);

vue.onUpdated(() => console.log("Vue Component ClickCounter.vue Updated"));

vue.onBeforeUnmount(() =>
  console.log("Vue Component ClickCounter.vue about to be Unmounted")
);

vue.onUnmounted(() => console.log("Vue Component ClickCounter.vue unmounted"));
</script>

<style></style>
