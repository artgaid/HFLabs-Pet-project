<template>
  <div class="about">
    <h1>This is an Edit page</h1>
    <ListForm @add="add" />
  </div>
</template>

<script setup>
import ListForm from "../components/ListForm.vue";
import { inject } from "vue";

const store = inject("store");

const add = (text) => {
  store.methods.addItem(text);
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
