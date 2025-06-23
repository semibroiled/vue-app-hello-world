<template>
  <ChildNode v-for="i in nb" :key="i" :index="i" @incr="increment" /><br />
  {{ total }}
</template>

<script lang="ts" setup>
import ChildNode from "./ChildNode.vue";
import { defineProps, ref } from "vue";

defineProps(["nb"]);

const total = ref(0);

const increment = (value: number) => {
  total.value += value;
};
</script>
