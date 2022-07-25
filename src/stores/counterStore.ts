import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({ counter: 0, numberOfChanges: 0 }),
  actions: {
    incrementBy(value: number) {
      this.counter += value;
      this.numberOfChanges += 1;
    },
  },
});

export default useCounterStore;
