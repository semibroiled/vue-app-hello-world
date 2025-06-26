<template>
  <div v-show="!countries.length">Fetching...</div>
  <br />

  <ol>
    <li v-for="country in namesOfCountries" :key="country">{{ country }}</li>
  </ol>
</template>

<script lang="ts" setup>
import { defineProps, ref, Ref, onMounted } from "vue";

defineProps(["name"]);

const namesOfCountries: Ref<string[]> = ref([]);

let countries: string[] = [];
const url = "https://restcountries.com/v3.1/all?fields=name,flags";

async function getCountries(url: string): Promise<string[]> {
  const res = await fetch(url);
  const parsed = await res.json();
  countries = parsed.map((el) => el.name.common);
  countries = countries.sort((n1, n2) => n1.localeCompare(n2));

  return countries;
}

onMounted(async () => {
  namesOfCountries.value = await getCountries(url);
});
//   // Promise
//   const url = "https://restcountries.com/v3.1/all?fields=name,flags";

//   fetch(url)
//     .then((res) => res.text())
//     .then((data) => {
//       //console.log(JSON.parse(data));
//       countries = JSON.parse(data).map((el) => el.name.common);

//       countries = countries.sort((n1, n2) => n1.localeCompare(n2));

//       namesOfCountries.value = countries;
//     })
//     .catch((err) => (namesOfCountries.value = [err.toString()]));
// });
</script>
