import axios from "axios";
import jwtDecode from "jwt-decode";
import { defineStore } from "pinia";
import { createPinia } from "pinia";
import { LoginInformation } from "../types";

export const pinia = createPinia();

const useFormStore = defineStore("loginForm", {
  state: () => ({ email: "", password: "" }),
  actions: {
    async loginPost(loginInformation: LoginInformation) {
      console.log(loginInformation);
      try {
        const route = `https://desterra-api.onrender.com/users/login`;
        const {
          data: { token },
        } = await axios.post(route, loginInformation);

        localStorage.setItem("token", token);

        jwtDecode(token);
      } catch (error: any) {
        console.log(error);
      }
    },
  },
});

export default useFormStore;
