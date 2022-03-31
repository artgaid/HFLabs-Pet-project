<template>
  <form @submit.prevent="submit" class="form">
    <transition name="err">
      <p v-if="err" class="form__err">
        ERROR: The input field must not be empty !!!
      </p>
    </transition>
    <input
      type="number"
      class="form__input"
      v-model.number="text"
      @focus="focus"
    />
    <button type="submit" class="form__btn">Save</button>
  </form>
</template>

<script setup>
import { defineEmits, ref } from "vue";

let text = ref("");
const emit = defineEmits(["add"]);
const err = ref(false);

// добавление в список с валидацией на пустое поле
const submit = () => {
  if (text.value) {
    emit("add", text.value);
    text.value = "";
  } else {
    err.value = true;
  }
};

// при фокусе поля ввода отключает ошибку
const focus = () => {
  err.value = false;
};
</script>

<style scoped lang="scss">
.form {
  height: 48px;

  display: flex;
  justify-content: center;

  width: 300px;

  &__input {
    width: 200px;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid var(--color-heading);
    color: var(--color-heading);
    outline: none;

    font-size: 20px;

    padding: 10px;
    margin-right: 10px;
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

  &__err {
    position: absolute;
    top: -50px;

    font-size: 13px;

    color: red;
    border: 1px solid red;
    padding: 10px;

    margin-bottom: 10px;
  }
}

.err-enter,
.err-leave-to {
  opacity: 0;
}

.err-enter-active,
.err-leave-active {
  transition: all 0.5s;
}
</style>
