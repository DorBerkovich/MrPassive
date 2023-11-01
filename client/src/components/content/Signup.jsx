import { useContext, useState } from "react";
import { UserInfoContext } from "../contexts";
import FormInput from "../utils/FormInput";
import { createUser } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password);
    setUserInfo({ name, email });
    navigate("/protfolio");
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <FormInput text={name} setText={setName} placeHolder="Your name" />
        <FormInput text={email} setText={setEmail} placeHolder="Your email" />
        <FormInput
          text={password}
          setText={setPassword}
          placeHolder="Choose a strong password"
        />
        <button type="submit"> send </button>
      </form>
    </div>
  );
}
