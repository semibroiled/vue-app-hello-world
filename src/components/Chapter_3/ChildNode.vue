<template>
  Lot {{ index }} <br />
  Count {{ count }} <br />
  Double {{ computedCount }} <br />
  <button @click="increment()">+1</button> <br />
</template>

<script lang="ts" setup>
import { ref, computed, defineProps, defineEmits } from "vue";

defineProps(["index"]);

const emit = defineEmits(["incr"]);

const count = ref(0);

const computedCount = computed(() => {
  return count.value * 2;
});

const increment = () => {
  count.value++;
  emit("incr", 1);
};
</script>
