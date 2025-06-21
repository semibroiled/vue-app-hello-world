<template>
  <UseVForChild
    v-for="(limit, i) in limits"
    :key="i"
    :index="i"
    :limit="limit"
  />
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import UseVForChild from "./UseVForChild.vue";

defineProps(["limits"]);
</script>

<style></style>
