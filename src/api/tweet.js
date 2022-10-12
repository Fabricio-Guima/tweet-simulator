import { v4 as uuidv4 } from "uuid";
import { TWEETS } from "../utils/constants";
import { size, remove } from "lodash";

export function saveTweetApi(tweet, username) {
  const tweets = getTweetApi();

  if (size(tweets) === 0) {
    const tweetTemp = [
      {
        id: uuidv4(),
        username,
        tweet,
        createdAt: new Date(),
      },
    ];
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
  } else {
    tweets.push({
      id: uuidv4(),
      username,
      tweet,
      createdAt: new Date(),
    });
    //sempre transformar em string antes de salvar algo no localstorage
    localStorage.setItem(TWEETS, JSON.stringify(tweets));
  }
}

export function getTweetApi() {
  const tweets = localStorage.getItem(TWEETS);
  if (!tweets) {
    return [];
  }
  return JSON.parse(tweets);
}

export function deleteTweetApi(idTweet) {
  const tweets = getTweetApi();
  remove(tweets, (tweet) => {
    return tweet.id === idTweet;
  });

  localStorage.setItem(TWEETS, JSON.stringify(tweets));
}
