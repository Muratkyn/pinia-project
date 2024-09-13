import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [
      {
        id: 1,
        title: "Wash the dishes",
        isFav: false,
      },
    ],
    name: "Pinia TODO App",
  }),
  actions: {
    addTodo(newTodo) {
      if (!newTodo) return;
      
      this.todos.push({
        id: this.todos.length + 1,
        title: newTodo,
        isFav: false,
      });
    },
  },
});
