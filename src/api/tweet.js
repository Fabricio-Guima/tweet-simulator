import { v4 as uuidv4 } from "uuid";
import { TWEETS } from "../utils/constants";

export function saveTweetApi(tweet, username) {
  const tweetTemp = {
    id: uuidv4(),
    username,
    tweet,
    createdAt: new Date(),
  };
  console.log(tweetTemp);
  //sempre transformar em string antes de salvar algo no localstorage
  localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
}
