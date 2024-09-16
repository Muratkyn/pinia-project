<template>
  <div class="task">
    <h3>{{ todo.title }}</h3>
    <div>
      <i @click="todoStore.deleteTodo(id)" class="material-icons">delete</i>
      <i
        @click="todoStore.toggleFav(id)"
        :class="{ active: todo.isFav }"
        class="material-icons"
        >favorite</i
      >
    </div>
  </div>
</template>

<script>
import { useTodoStore } from "@/store/TodoStore";
export default {
  props: ["todo", "id"],
  setup() {
    const todoStore = useTodoStore();
    const deleteTodo = (id) => {
      todoStore.deleteTodo(id);
    };

    return {
      todoStore,
      deleteTodo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
