<template>
  <form>
    <textarea
      placeholder="type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handlSubmit"
    ></textarea>
  </form>
  <div v-if="error" class="error">{{ error }}</div>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { timestamp } from "../firebase/config";

export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { error, addDoc } = useCollection("messages");

    const handlSubmit = async () => {
      const chat = {
        message: message.value,
        name: user.value.displayName,
        createdAt: timestamp(),
      };
      await addDoc(chat);

      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handlSubmit, error };
  },
};
</script>

<style scoped>
form {
  margin: 20px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
