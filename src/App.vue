<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <Form :showForm="showForm" />
</template>

<script>
import Menu from "./components/Menu.vue";
import Form from "./components/Form.vue";
import useFormTweet from "./hooks/useFormTweet";

export default {
  components: {
    Menu,
    Form,
  },
  name: "App",

  setup() {
    return {
      ...useFormTweet(),
    };
  },
};
</script>

<style lang="scss"></style>
