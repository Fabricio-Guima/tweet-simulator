<template>
  <div class="container">
    <h1 class="text-center">Lista de Tweets</h1>
    <p v-if="tweets.length === 0">Crie um novo Tweet</p>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <p class="tweet__title">{{ tweet.username }}</p>
      <p class="tweet__message">{{ tweet.tweet }}</p>
      <span class>{{ formatDate(tweet.createdAt) }}</span>
      <Close @click="deleteTweet(tweet.id)" class="svg" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { Close } from "./icons/index";
import { deleteTweetApi } from "../api/tweet";

export default {
  props: {
    tweets: {
      type: Array,
    },
    reloadTweets: Function,
  },
  components: {
    Close,
  },

  setup(props) {
    const formatDate = (date) => {
      return moment(date).fromNow();
    };

    const deleteTweet = (idTweet) => {
      deleteTweetApi(idTweet);
      props.reloadTweets();
    };

    return {
      formatDate,
      deleteTweet,
    };
  },
};
</script>

<style lang="scss">
.tweet {
  position: relative;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }
  &__title {
    position: absolute;
    top: -12px;
    left: 10px;
    background-color: #fff;
    font-weight: bold;
  }

  &__text {
    color: grey;
  }

  span {
    position: absolute;
    right: 10px;
    bottom: -9px;
    font-size: 12px;
    color: grey;
    background-color: #fff;
    padding: 0 20px;
    border: 1px solid #ccc;
  }

  svg {
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
      color: #f00;
    }
  }
}
</style>
