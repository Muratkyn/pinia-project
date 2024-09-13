<template>
  <div class="task">
    <h3>{{ todo.title }}</h3>
    <div>
      <i class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  setup() {},
};
</script>

<style lang="scss" scoped></style>
