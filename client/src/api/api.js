import axios from "./axios";

const postMassage = (massage, userId) => {
  axios.post(`contact/${userId}`, { massage }); // i neead the user info!
};

const createUser = (name, email, password) => {
  axios
    .post("/signup", { name, email, password })
    .then((res) => console.log(res));
};

export { postMassage, createUser };
