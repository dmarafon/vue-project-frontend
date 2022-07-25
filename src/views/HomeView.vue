<script setup lang="ts">
import { watch } from "vue";
import useCounterStore from "../stores/counterStore";
import ButtonTest from "../components/ButtonTest.vue";
import LoginComponent from "../components/LoginComponent/LoginComponent.vue";

const counterStore = useCounterStore();

watch([counterStore.counter], () => console.log("wowww"));
</script>

<template>
  <div>
    <LoginComponent />
    <ButtonTest button-name="test"></ButtonTest>
  </div>
</template>
