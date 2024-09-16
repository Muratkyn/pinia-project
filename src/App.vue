<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia" />
      <h1>{{ name }}</h1>
    </header>
    <div class="input-field">
      <input type="text" placeholder="I need to.." v-model="newTodo" />
      <button @click="addNewTodo">Add</button>
    </div>
    <div class="button-list" v-if="todoStore.todos.length > 0">
      <button @click="filter = 'all'">All</button>
      <button @click="filter = 'favs'">Favs</button>
    </div>

    <div class="task-list" v-if="filter === 'all'">
      <p v-if="todoStore.todos.length > 0">
        You have
        <strong class="bold">{{ countAll }}</strong> tasks left!
      </p>
      <div v-if="todoStore.todos.length === 0">
        <EmptyList />
      </div>

      <div v-else v-for="todo in todos">
        <TodoList :todo="todo" :id="todo.id"></TodoList>
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Favorite tasks ({{ countFavs }})</p>
      <div v-for="todo in getFav">
        <TodoList :todo="todo" :id="todo.id"></TodoList>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "./store/TodoStore";
import TodoList from "./components/TodoList.vue";
import EmptyList from "./components/EmptyList.vue";
export default {
  components: { TodoList, EmptyList },
  setup() {
    const todoStore = useTodoStore();
    const { todos, name, getFav, countFavs, countAll } = storeToRefs(todoStore);
    const newTodo = ref("");
    const filter = ref("all");
    console.log(todoStore.todos, "todos");
    const addNewTodo = () => {
      if (!newTodo) return;
      const val = newTodo.value
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");

      todoStore.addTodo(val);
      newTodo.value = "";
    };
    return {
      todoStore,
      addNewTodo,
      newTodo,
      filter,
      todos,
      name,
      getFav,
      countFavs,
      countAll,
    };
  },
};
</script>
