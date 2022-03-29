import { reactive } from "vue";

const state = reactive({
  items: [
    {
      id: 2,
      title: "74 deg",
    },
    {
      id: 1,
      title: "47 deg",
    },
    {
      id: 0,
      title: "53 deg",
    },
  ],
  editItem: {},
});

const methods = {
  addItem(text) {
    state.items.unshift({
      id: Math.max(...state.items.map((i) => i.id)) + 1,
      title: text,
    });
  },
  deleteItem(id) {
    state.items = state.items.filter((e) => e.id !== id);
  },
  editItems(id) {
    console.log("editItems : ", id);
  },
};

export default {
  state,
  methods,
};
