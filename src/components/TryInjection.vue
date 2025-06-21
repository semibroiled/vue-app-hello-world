<template>
  <h2>This is my reactive variable : {{ count }}</h2>
  <h2>>This is my computed variable : {{ doubleCount }}</h2>
  <input type="text" v-bind:value="count" />
</template>

<script lang="ts" setup>
import * as vue from "vue";
import { defineProps } from "vue";

const props = defineProps(["count", "doubleCount"]);

console.log(`Init count=${props.count}`);

vue.onUpdated(() => console.log(`Updated count=${props.count}`));
</script>

<style></style>
