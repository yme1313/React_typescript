import axios from "axios";

export async function axiosTodo() {
  return await axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data);
}