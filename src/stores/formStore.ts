import { defineStore } from "pinia";

import { createPinia } from "pinia";

export const pinia = createPinia();

const useFormStore = defineStore("loginForm", {
  state: () => ({ email: "", password: "" }),
});

export default useFormStore;
