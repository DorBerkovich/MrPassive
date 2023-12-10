import React, { useEffect, useState, useRef, useContext } from "react";
import { userLogin } from "../../api/api";
import { authContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const Login = () => {
  const { setAuth } = useContext(authContext);

  const [email, setEmail] = useState("");
  const emailRef = useRef();

  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
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
      const { data } = await userLogin(email, password);
      const { accessToken, name, isAdminString } = data;
      const isAdmin = isAdminString === "true";
      setEmail("");
      setPassword("");
      setAuth({ email, name, accessToken, isAdmin });
      navigate(from, { replace: true });
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
    <section className="login">
      {errMsg ? <p>{errMsg}</p> : null}
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block">
          {" "}
          your email
        </label>
        <input
          className="block"
          value={email}
          type="email"
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
          required
        />

        <label htmlFor="password" className="block">
          password
        </label>
        <input
          className="block"
          value={password}
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
