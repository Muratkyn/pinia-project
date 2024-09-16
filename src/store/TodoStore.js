import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [
      {
        id: 1,
        title: "Wash the dishes",
        isFav: false,
      },
      {
        id: 2,
        title: "Feed Mirko",
        isFav: false,
      },
      {
        id: 3,
        title: "sdsd ssds",
        isFav: false,
      },
    ],
    name: "Pinia TODO App",
  }),
  actions: {
    addTodo(newTodo) {
      if (!newTodo) return;

      this.todos.push({
        id: Math.round(Math.random() * 100000000),
        title: newTodo,
        isFav: false,
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleFav(id) {
      const foundTask = this.todos.find((task) => task.id === id);
      if (foundTask) {
        foundTask.isFav = !foundTask.isFav;
      }
    },
  },
  getters: {
    getFav() {
      return this.todos.filter((todo) => todo.isFav);
    },
    countAll() {
      return this.todos.length;
    },
    countFavs() {
      const favsList = this.todos.filter((todo) => todo.isFav);
      return favsList.length;
    },
  },
});
