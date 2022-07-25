<script lang="ts">
import { LoginStyled } from "./LoginStyled";

export default {
  name: "LoginComponent",
  components: {
    LoginStyled: LoginStyled,
  },
  props: { buttonName: { type: String } },
};
</script>

<template>
  <LoginStyled>
    <div>
      <h1>Sign Up</h1>
    </div>
    <form @submit="onSubmit">
      <div>
        <label for="email">Email Address</label>
        <input id="email" v-model="email" type="email" placeholder=" " />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder=" "
        />
      </div>
    </form>
  </LoginStyled>
</template>
