import { defineStore } from "pinia";

const useUiStore = defineStore("uiStore", {
  state: () => ({ loading: false }),
});

export default useUiStore;
