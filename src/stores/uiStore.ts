import { defineStore, createPinia } from "pinia";

export const pinia = createPinia();

const useUiStore = defineStore("uiStore", {
  state: () => ({ loading: false }),
});

export default useUiStore;
