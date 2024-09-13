<template>
  <div class="empty-field">
    <h4>It's empty here..</h4>
    <img
      src="https://cdn0.iconfinder.com/data/icons/empty-state-flat/64/no_task_no_report_clipboard_task_report_empty_state_error_state_empty_error-512.png"
      alt="empty"
      width="200px"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.empty-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  transition: opacity 1s ease;
}

img.fade {
  opacity: 0.3; /* Faded, but not fully invisible */
}
</style>
