import { reactive } from "vue";

const state = reactive({
  items: [
    {
      id: 2,
      title: 74,
    },
    {
      id: 1,
      title: 47,
    },
    {
      id: 0,
      title: 53,
    },
  ],
});

const methods = {
  // добавление в список
  add(text) {
    state.items.unshift({
      id: Math.max(...state.items.map((i) => i.id)) + 1,
      title: text,
    });
  },

  // удаление из списка
  delete(id) {
    const index = state.items.findIndex((e) => e.id === id);
    if (index !== -1) {
      state.items.splice(index, 1);
    }
  },
};

export default {
  state,
  methods,
};
