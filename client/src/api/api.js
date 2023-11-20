import axios from "./axios";
import { BASE_URL } from "../utils/config";

const postMassage = (massage, userId) => {
  axios.post(`contact/${userId}`, { massage }); // i neead the user info!
};

const createUser = (name, email, password) => {
  console.log(JSON.stringify({ name, email, password }));
  axios
    .post("/signup", { name, email, password }, { withCredentials: true })
    .then((res) => console.log(res));
};

const userLogin = async (email, password) => {
  const res = await axios.post("/login", {email, password}, {withCredentials: true})
  return res
}

export { postMassage, createUser, userLogin };
