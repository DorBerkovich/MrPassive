import { useContext, useState, useEffect, useRef } from "react";
import { UserInfoContext } from "../contexts";
import { createUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const NAME_REGEX = /^[a-zA-Z]{2,20}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default function Signup() {
  const [userInfo, setUserInfo] = useContext(UserInfoContext);

  const [name, setName] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const nameRef = useRef();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const validName = NAME_REGEX.test(name);
  const validEmail = EMAIL_REGEX.test(email);
  const validPassword = password.length >= 4;

  useEffect(() => nameRef.current.focus(), []);
  useEffect(() => setErrMsg(""), [name, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validName || !validEmail || !validPassword) {
      setErrMsg("Invalid entry");
      return;
    }
    try {
      const res = createUser(name, email, password);
      console.log(res)
      setUserInfo({ name, email });
      navigate("/");
    } catch (err) {
      // implement error handling!
      setErrMsg("error");
    }
  };

  return (
    <section className="signup">
      {errMsg ? <p>{errMsg}</p> : null}
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block">
          {" "}
          your name
        </label>
        <input
          className="block"
          type="text"
          id="name"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
          ref={nameRef}
          required
        />
        {name && nameFocus && !validName ? (
          <p className="instruction">
            Only letters allowed. <br />
            minimum 2 up to 20 characters.
          </p>
        ) : null}

        <label htmlFor="email" className="block">
          {" "}
          your email
        </label>
        <input
          className="block"
          type="email"
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className="block">
          new password
        </label>
        <input
          className="block"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          required
        />
        {password && passwordFocus && !validPassword ? (
          <p className="instruction">Minimum 4 characters.</p>
        ) : null}

        <button
          type="submit"
          disabled={validName && validEmail && validPassword ? false : true}
        >
          send
        </button>
      </form>
    </section>
  );
}
