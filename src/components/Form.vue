<template>
  <div class="tweet-form container" :class="{ open: showForm }">
    <form @submit.stop.prevent="sendTweet" class="form-group">
      <label for="">Nome:</label>
      <input
        type="text"
        v-model="username"
        class="form-control mt-1 mb-2"
        placeholder="Nome"
      />
      <label for="">Texto:</label>
      <textarea
        v-model="tweet"
        class="form-control mt-1 mb-2"
        rows="3"
        placeholder="Escreva seu tweet"
      ></textarea>

      <button type="submit" class="btn btn-primary mt-1 mb-2">
        Enviar Tweet
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { saveTweetApi } from "../api/tweet";
export default {
  props: {
    showForm: Boolean,
    reloadTweets: Function,
    openCloseForm: Function,
  },

  setup(props) {
    let username = ref("");
    let tweet = ref("");
    const sendTweet = () => {
      if (!tweet.value || !username.value) return;
      saveTweetApi(tweet.value, username.value);
      tweet.value = "";
      username.value = "";
      props.reloadTweets();
      props.openCloseForm();
    };

    return {
      username,
      tweet,
      sendTweet,
    };
  },
};
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  overflow: hidden;
  height: 0;

  &.open {
    height: auto;
  }

  form {
    margin-top: 50px;

    button {
      width: 100%;
    }
  }
}
</style>
