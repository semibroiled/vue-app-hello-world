<template>
  Counter:
  <input
    type="text"
    @keydown="(e) => verifyKey(e)"
    @input="(e) => verifyMax(e, 100)"
    @click="eraseField"
    v-model="count"
  />

  Count is {{ count }}{{ message }}
</template>
<script setup lang="ts">
import { ref } from "vue";

const count = ref();
const message = ref();

const verifyKey = (event: KeyboardEvent) => {
  const numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const moves: string[] = [
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Tab",
    "Home",
    "End",
  ];

  const authourized: string[] = [...numbers, ...moves];

  if (!authourized.includes(event.key)) event.preventDefault();
};

const verifyMax = (event: Event, max: number) => {
  message.value = "";
  const target = event.target as HTMLInputElement;
  const value = target.value;
  if (parseInt(value) > max) message.value = `Do not exceed ${max}!`;
};

const eraseField = (event: Event) => {
  event.target.value = "";
  count.value = "";
  message.value = "";
};

// const increment = () => count.value++;
</script>
<style></style>
