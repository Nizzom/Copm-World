import { Storage } from "./storage.hook";

export const useCheck = () => {

  const {likeIt} = Storage()
  let action = localStorage.getItem("action");
  if (!action) {
    localStorage.setItem("action", '{ liked: false, disliked: false }');
    action = { liked: false, disliked: false }
  }

  const like = (id, type) => {
    if (!action[type]) {
      likeIt(action,type,id)
    }
    return;
  };

  return {action, like};
};
