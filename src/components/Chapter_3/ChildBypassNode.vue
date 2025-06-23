<template>
  <SubChildNode v-for="i in nb" :key="i" :index="i" />
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import SubChildNode from "./SubChildNode.vue";

const props = defineProps(["nb"]);
const nb = props.nb ?? 1;
</script>
