<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Simulador de Tweets</span>
      <button
        @click="openCloseForm()"
        class="btn px-4"
        :class="{ 'btn-danger': showForm, 'btn-success': !showForm }"
      >
        {{ !showForm ? " Novo Tweet" : "Cancelar Tweet" }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    openCloseForm: Function,
    showForm: Boolean,
  },
};
</script>

<style></style>
