<script setup lang="ts">
import { watch } from "vue";
import useCounterStore from "../stores/counterStore";
import ButtonTest from "../components/ButtonTest.vue";

const counterStore = useCounterStore();

watch([counterStore.counter], () => console.log("wowww"));
</script>

<template>
  <div>
    <h1>Home View: {{ counterStore.counter }}</h1>
    <h2>Number of Changes {{ counterStore.numberOfChanges }}</h2>
    <ButtonTest button-name="test"></ButtonTest>
  </div>
</template>
