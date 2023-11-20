import React, { useEffect, useState, useRef } from "react";
import { userLogin } from "../../api/api";


const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const Login = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef();

  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const validEmail = EMAIL_REGEX.test(email);
  const validPassword = password.length >= 4;

  useEffect(() => emailRef.current.focus(), []);
  useEffect(() => setErrMsg(""), [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validEmail || !validPassword) {
      setErrMsg("Invalid entry");
      return;
    }
    try {
      const data = await userLogin(email, password);
      const userInfo = 
    } catch (err) {
      const errorText = !err.response
        ? "No server response"
        : err.response.status === 400
        ? "Missing email or password"
        : err.response.status === 401
        ? "Unauthorized"
        : "Login failed";

      setErrMsg(errorText);
    }
  };

  return (
    <section>
      {errMsg ? <p>{errMsg}</p> : null}
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> your email</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
          required
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          required
        />
        {password && passwordFocus && !validPassword ? (
          <p>Minimum 4 characters.</p>
        ) : null}

        <button
          type="submit"
          disabled={validEmail && validPassword ? false : true}
        >
          send
        </button>
      </form>
    </section>
  );
};

export default Login;
