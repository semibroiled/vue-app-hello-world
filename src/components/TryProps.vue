<template>
  init: {{ init }} .... end: {{ end }} <br />
  <h2>This is my reactive variable : {{ count }}</h2>
  <h2>>This is my computed variable : {{ myComputedVariable }}</h2>
  <button @click="decrementCounter()">Decrement</button>
  <button @click="incrementCounter()">Increment</button>
  <button @click="resetCounter()">Reset</button>
</template>

<script lang="ts" setup>
import * as vue from "vue";
import { defineProps } from "vue";
console.log("Component loaded in memory");

const props = defineProps(["limit"]);
// const props = defineProps(["init", "end"]);
// const props = defineProps<{
//   init?: string | number;
//   end?: string | number;
// }>();

const init: number = parseInt(props.limit?.init?.toString() ?? "0");
const end: number = parseInt(props.limit?.end?.toString() ?? "0");

const count = vue.ref(init);
const timer = vue.ref(0);

const myComputedVariable = vue.computed(() => {
  return count.value * 2;
});

const incrementCounter = () => {
  console.log("before increment value");
  end == 0 || count.value < end ? count.value++ : stop();
  console.log("after increment value");
};

const decrementCounter = () => {
  console.log("before decrement value");
  count.value--;
  console.log("after decrement value");
};

const resetCounter = () => {
  count.value = 0;
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
