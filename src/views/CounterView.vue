<script setup lang="ts">
import { watch } from "vue";
import useCounterStore from "../stores/counterStore";

const counterStore = useCounterStore();

watch([counterStore], () => console.log("wowww"));

const reset = () => {
  counterStore.$reset();
};
</script>

<script lang="ts">
export default {
  data() {
    return {
      test: true,
    };
  },
};
</script>

<template>
  <div>
    <h1>Counter View: {{ counterStore.counter }}</h1>
    <button @click="counterStore.incrementBy(1)">+1</button>
    <button @click="counterStore.incrementBy(2)">+2</button>
    <button @click="counterStore.incrementBy(3)">+3</button>
    <button @click="reset">Reset</button>
    <button @click="test = !test">SHOW IMAGE</button>
    <img
      v-if="test"
      :width="400"
      src="https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/16549876665262.jpeg?alt=media&token=f93124ca-8568-436f-a7a5-b46b0d9eca5a"
      alt="artwork from jesus perea"
    />
  </div>
</template>
