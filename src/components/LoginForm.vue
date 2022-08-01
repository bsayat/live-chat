<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useSignin";

export default {
  setup(_, context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);

      if (!error.value) {
        context.emit('login');
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style scoped>
button {
  display: block;
}
</style>
