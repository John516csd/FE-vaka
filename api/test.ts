import axios from "../utils/request";

export const getTodoList = () => {
  return new Promise((res, rej) => {
    axios
      .get("/todo")
      .then((data) => {
        res(data);
      })
      .catch((e) => {
        rej(e);
      });
  });
};
