<script setup lang="ts">
import useLoginFormStore from "../../stores/formStore";
import useUiStore from "../../stores/uiStore";
import LoadingModal from "../LoadingModal/LoadingModal.vue";
import { storeToRefs } from "pinia";

const storeLogin = useLoginFormStore();

const storeUI = useUiStore();

const { loading } = storeToRefs(storeUI);

const handleSubmit = () => {
  const { email, password, loginPost } = storeLogin;

  loginPost({ email, password });

  storeLogin.$reset();
};
</script>

<template>
  <Teleport to="#modal__container">
    <LoadingModal v-if="loading" />
  </Teleport>
  <section class="login__container">
    <div>
      <h1>Sign Up</h1>
    </div>
    <form noValidate autoComplete="off" @submit.prevent="handleSubmit">
      <div class="login__input--email">
        <label for="email">Email Address</label>
        <input
          id="email"
          v-model="storeLogin.email"
          type="email"
          placeholder=" "
        />
      </div>
      <div class="login__input--password">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="storeLogin.password"
          type="password"
          placeholder=" "
        />
      </div>
      <div class="login__input--button">
        <button type="submit">Log In</button>
      </div>
    </form>
  </section>
</template>

<style src="./LoginStyle.css"></style>
