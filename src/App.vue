<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia" />
      <h1>{{ todoStore.name }}</h1>
    </header>
    <div class="input-field">
      <input type="text" placeholder="I need to.." v-model="newTodo" />
      <button @click="addNewTodo">Add</button>
    </div>
    <div class="task-list">
      <div v-for="todo in todoStore.todos">
        <TaskList :todo="todo" :id="id"></TaskList>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { useTodoStore } from "./store/TodoStore";
import TaskList from "./components/TaskList.vue";
export default {
  components: { TaskList },
  setup() {
    const todoStore = useTodoStore();
    const newTodo = ref("");

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
    };
  },
};
</script>
