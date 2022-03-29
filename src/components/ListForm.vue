<template>
  <form @submit.prevent="submit" class="form">
    <input class="form__input" v-model="text" type="text" />
    <button type="submit" class="form__btn">Save</button>
  </form>
  <button @click="back" class="form__back">Go back</button>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import { useRouter } from "vue-router";

let text = ref("");
const emit = defineEmits(["add"]);
const router = useRouter();

const submit = () => {
  emit("add", text.value);
  text.value = "";
};

const back = () => {
  router.push("/");
};
</script>

<style scoped></style>
