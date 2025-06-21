<template>
  <h2>Input Form</h2>
  Name <input type="text" v-model.lazy.trim="name" /><br />

  DOB
  <select v-model="birthyear">
    <option v-for="date in dates" :value="date" :key="date">
      {{ date }}
    </option></select
  ><br />

  Marital Status
  <input type="radio" value="M" id="married" v-model="maritalStatus" />
  <label for="married">Married</label>
  <input type="radio" value="S" id="single" v-model="maritalStatus" />
  <label for="single">Single</label><br />

  <input
    type="checkbox"
    value="accept"
    id="accept"
    v-model="acceptConditions"
  />
  <label for="accept">Accept Conditions</label>
  <input type="checkbox" value="read" id="read" v-model="acceptConditions" />
  <label for="read">Read Terms</label><br />

  <h2>Variable Tracker</h2>
  Name: {{ name }} <br />

  DOB: {{ birthyear }} <br />
  Marital Status: {{ maritalStatus }} <br />
  Accept Conditions: {{ acceptConditions }}
</template>

<script lang="ts" setup>
import * as vue from "vue";

const name = vue.ref("");

let dates: number[] = [];
for (let year: number = 2024; year > 1930; year--) {
  dates.push(year);
}
const birthyear = vue.ref("");

const maritalStatus = vue.ref([]);

const acceptConditions = vue.ref([]);
</script>

<style scoped>
h2 {
  background-color: gainsboro;
  padding: 5px;
}
</style>
