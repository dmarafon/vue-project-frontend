<script lang="ts">
export default { name: "ButtonTest", props: { buttonName: { type: String } } };
</script>

<template>
  <div>
    <button>{{ buttonName }}</button>
  </div>
</template>
