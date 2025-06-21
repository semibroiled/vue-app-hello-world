<template>
  <h2>My Counter {{ index }}</h2>
  <h2>This is my reactive variable : {{ count }}</h2>
  <h2>>This is my computed variable : {{ myComputedVariable }}</h2>
  init: {{ init }} till end: {{ end === 0 ? "Infinity" : end }}
  <input type="text" v-bind:value="count" />
  <button v-if="!active" @click="startTimer()">Start</button>
  <button v-else @click="stopTimer()">Stop</button>
</template>

<script lang="ts" setup>
import * as vue from "vue";
import { defineProps } from "vue";

const props = defineProps(["index", "limit"]);

const init: number = props.limit?.init ?? 0;
const end: number = props.limit?.end ?? 0;

const count = vue.ref(init);
const timer = vue.ref(0);
const active = vue.ref(false);

const myComputedVariable = vue.computed(() => {
  return count.value * 2;
});

const incrementCounter = () => {
  end == 0 || count.value < end ? count.value++ : stop();
};

const startTimer = () => {
  console.log("START COUNTER");
  active.value = true;
  console.log("Active: ", active.value);
  timer.value = setInterval(function () {
    incrementCounter();
  }, 1000);
};

const stopTimer = () => {
  console.log("STOP COUNTER");
  active.value = false;
  console.log("Active: ", active.value);
  clearInterval(timer.value);
};

vue.onMounted(() => {
  startTimer();
  console.log("Vue Component UseVForChild.vue mounted");
});

vue.onUnmounted(() => {
  stopTimer();
  console.log("Vue Component UseVForChild.vue unmounted");
});
</script>

<style></style>
