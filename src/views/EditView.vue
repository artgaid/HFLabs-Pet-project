<template>
  <div class="edit">
    <ListForm @add="addItem" />
    <button @click="back" class="edit__bth">Go back</button>
  </div>
</template>

<script setup>
import ListForm from "../components/ListForm.vue";
import { inject } from "vue";
import { useRouter } from "vue-router";

const store = inject("store");
const router = useRouter();

const addItem = (text) => {
  store.methods.add(text);
};

const back = () => {
  router.push("/");
};
</script>

<style scoped lang="scss">
.edit {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__bth {
    width: 300px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;

    font-size: 21px;
    color: var(--color-heading);
    border: 0;
    background-color: transparent;

    transition: all 0.5s ease-in-out;

    padding: 10px 0;
    margin-top: 10px;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: var(--color-border-hover);
      }
    }
  }

  @media screen and (max-width: 1199px) {
    height: calc(100vh - 110px);
  }
}
</style>
