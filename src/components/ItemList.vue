<template>
  <RouterLink to="/edit"> Создания новой записи </RouterLink>

  <div class="head">
    <p>idx</p>
    <p>id</p>
    <p>title</p>
  </div>

  <Item
    v-for="(item, idx) in store.state.items"
    :key="idx"
    @delete="del(item.id)"
    @edit="edit(item.id)"
  >
    <template #idx> {{ idx }} </template>
    <template #id> {{ item.id }} </template>
    <template #title> {{ item.title }} </template>
    <template #delete>Delete</template>
    <template #edit>Edit</template>
  </Item>
</template>

<script setup>
import Item from "./ItemCard.vue";
import { inject } from "vue";

const store = inject("store");

const del = (id) => {
  store.methods.deleteItem(id);
};

const edit = (id) => {
  console.log("edit", id);
  store.method.editItem(id);
};
</script>

<style scoped>
.head {
  display: flex;
  gap: 20px;
}
</style>
