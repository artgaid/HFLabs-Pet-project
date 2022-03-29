<template>
  <div class="item">
    <div class="item__idx">
      <slot name="idx"></slot>
    </div>
    <div class="item__id">
      <slot name="id"></slot>
    </div>
    <h3 class="item__title">
      <slot name="title"></slot>
    </h3>
    <button @click="edit" class="item__btn"><slot name="edit"></slot></button>
    <button @click="del" class="item__btn"><slot name="delete"></slot></button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["delete", "edit"]);

const del = () => {
  emit("delete");
};

const edit = () => {
  emit("edit");
};
</script>

<style scoped lang="scss">
.item {
  margin-top: 2rem;
  display: flex;
  gap: 30px;

  &__btn {
    border: 0;
    background-color: transparent;
    color: green;
  }
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
