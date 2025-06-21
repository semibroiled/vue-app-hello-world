<template>
  <h2>This is my reactive variable : {{ count }}</h2>
  <h2>>This is my computed variable : {{ myComputedVariable }}</h2>
  <input type="text" v-bind:value="count" />
  <button v-show="!active" @click="startTimer()">Start</button>
  <button v-show="active" @click="stopTimer()">Stop</button>
</template>

<script lang="ts" setup>
import * as vue from "vue";

const count = vue.ref(0);
const timer = vue.ref(0);
const active = vue.ref(false);

const myComputedVariable = vue.computed(() => {
  return count.value * 2;
});

const incrementCounter = () => {
  count.value++;
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
</script>

<style></style>
