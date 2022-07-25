<script setup lang="ts">
import useFormStore from "../../stores/formStore";

const storeLogin = useFormStore();

const handleSubmit = async () => {
  const { email, password, loginPost } = storeLogin;

  loginPost({ email, password });
};
</script>

<template>
  <section class="test">
    <div>
      <h1>Sign Up</h1>
    </div>
    <form noValidate autoComplete="off" @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email Address</label>
        <input
          id="email"
          v-model="storeLogin.email"
          type="email"
          placeholder=" "
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="storeLogin.password"
          type="password"
          placeholder=" "
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  </section>
</template>

<style src="./LoginStyled.css"></style>
