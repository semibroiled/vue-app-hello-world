<template>
  Lot {{ index }} <br />
  Count {{ count }} <br />
  Double {{ computedCount }} <br />
  <button @click="increment()">+1</button> <br />
</template>

<script lang="ts" setup>
import { ref, computed, defineProps, inject, Ref } from "vue";

defineProps(["index"]);

const total = inject<Ref<number>>("total", ref(0));

const count = ref(0);

const computedCount = computed(() => {
  return count.value * 2;
});

const increment = () => {
  count.value++;
  total.value++;
};
</script>
