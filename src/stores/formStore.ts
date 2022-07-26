import axios from "axios";
import jwtDecode from "jwt-decode";
import { defineStore } from "pinia";
import { createPinia } from "pinia";
import { LoginInformation } from "../types";
import useUiStore from "./uiStore";

export const pinia = createPinia();

const useLoginFormStore = defineStore("loginForm", {
  state: () => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: LoginInformation) {
      const storeUI = useUiStore();

      storeUI.$patch({ loading: true });
      console.log(storeUI.loading);

      try {
        const route = `${import.meta.env.VITE_API_URL}users/login`;
        const {
          data: { token },
        } = await axios.post(route, loginInformation);

        localStorage.setItem("token", token);

        jwtDecode(token);

        storeUI.$patch({ loading: false });
      } catch (error: any) {
        console.log(error);
        storeUI.$patch({ loading: false });
      }
    },
  },
});

export default useLoginFormStore;
