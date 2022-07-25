<script setup lang="ts">
import useFormStore from "../../stores/formStore";
import { LoginStyled } from "./LoginStyled";

const LoginStyle = {
  components: {
    LoginStyle: LoginStyled,
  },
};

const loginForm = useFormStore();
</script>

<template>
  <LoginStyle>
    <div>
      <h1>Sign Up</h1>
    </div>
    <form submit="onSubmit">
      <div>
        <label for="email">Email Address</label>
        <input
          id="email"
          v-model="loginForm.email"
          type="email"
          placeholder=" "
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="loginForm.password"
          type="password"
          placeholder=" "
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  </LoginStyle>
</template>
