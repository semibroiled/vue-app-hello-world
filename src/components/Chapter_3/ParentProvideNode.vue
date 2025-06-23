<template>
  <ChildBypassNode :nb="5" /><br />
  {{ total }}
</template>

<script lang="ts" setup>
import ChildBypassNode from "./ChildBypassNode.vue";

import { provide, ref } from "vue";

const total = ref(0);

provide("total", total);
</script>
