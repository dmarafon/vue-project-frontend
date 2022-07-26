import axios from "axios";
import jwtDecode from "jwt-decode";
import { defineStore } from "pinia";
import { LoginInformation } from "../types";
import useUiStore from "./uiStore";

const useLoginFormStore = defineStore("loginForm", {
  state: () => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: LoginInformation) {
      const storeUI = useUiStore();

      storeUI.$patch({ loading: true });

      try {
        const route = `${import.meta.env.VITE_API_URL}users/login`;
        const {
          data: { token },
        } = await axios.post(route, loginInformation);

        localStorage.setItem("token", token);

        jwtDecode(token);

        storeUI.$patch({ loading: false });
      } catch (error: any) {
        storeUI.$patch({ loading: false });
      }
    },
  },
});

export default useLoginFormStore;
