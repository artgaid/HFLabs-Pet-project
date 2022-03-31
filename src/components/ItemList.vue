<template>
  <div class="list-wrapper">
    <RouterLink class="link" to="/edit"> Creating a new record </RouterLink>

    <ul class="list">
      <li class="list__head" :key="-1">
        <p>IDX</p>
        <p>ID</p>
        <p>TITLE</p>
      </li>
      <li v-for="(item, index) in store.state.items" :key="index" class="item">
        <div class="item__number">
          {{ index }}
        </div>
        <div class="item__number">
          {{ item.id }}
        </div>
        <input
          class="item__input"
          @keyup.enter="editItem(-1)"
          v-if="edit === index"
          type="number"
          v-model.number="item.title"
        />
        <h3 v-else class="item__title">{{ item.title }} °</h3>
        <button
          @click="editItem(edit === index ? -1 : index)"
          class="item__btn"
        >
          <span v-if="edit === index">Save</span>
          <span v-else>Edit</span>
        </button>
        <button @click="deleteItem(item.id)" class="item__btn">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";

const store = inject("store");

let edit = ref(-1);

// удаление из store/списка
const deleteItem = (id) => {
  store.methods.delete(id);
};

// указывает index редактируемого значения
const editItem = (idx) => {
  edit.value = idx;
};
</script>

<style scoped lang="scss">
.list-wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.link {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;

  border-left: 1px solid var(--color-border);

  font-size: 21px;
  text-decoration: none;
  color: var(--color-heading);

  transition: all 0.5s ease-in-out;

  &:first-of-type {
    border: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--color-border-hover);
    }
  }

  @media screen and (max-width: 1199px) {
    margin: 20px 0;
  }
}

.list {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 0;

  border-top: 1px solid white;
  border-bottom: 1px solid white;

  &__head {
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid: auto/ repeat(3, 100px);
    justify-content: center;

    font-size: 35px;

    list-style-type: none;

    border-bottom: 1px solid white;

    padding: 0 0 10px 0;
    margin-bottom: 10px;

    @media screen and (max-width: 1199px) {
      font-size: 25px;
      grid: auto/ repeat(3, 50px);
      justify-content: left;

      padding: 0 0 5px 5px;
      margin-bottom: 5px;
    }
  }

  @media screen and (max-width: 1199px) {
    align-items: flex-start;
  }
}

.item {
  display: grid;
  grid: auto/ repeat(5, minmax(100px, auto));
  grid-gap: 10px;

  font-size: 20px;

  margin-left: 240px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__input {
    width: 100px;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid var(--color-heading);
    color: var(--color-heading);
    outline: none;

    padding: 5px;
    font-size: 20px;

    @media screen and (max-width: 1199px) {
      width: 50px;
    }
  }

  &__btn {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;

    font-size: 21px;
    text-decoration: none;
    color: var(--color-heading);
    border: 0;
    background-color: transparent;

    transition: all 0.5s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: var(--color-border-hover);
      }
    }
  }

  @media screen and (max-width: 1199px) {
    font-size: 15px;
    grid-gap: 7px;
    grid: auto/ repeat(5, minmax(50px, auto));
    justify-content: left;

    padding: 0 0 5px 5px;
    margin-left: 10px;
  }
}
</style>
