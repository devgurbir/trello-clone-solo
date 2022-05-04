import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./loginSignup.module.css";
import OAuthButton from "./OAuthButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/User/actions";
const Login = () => {
  const [val, setVal] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  const xyz = async () => {
    window.open(`${process.env.REACT_APP_BACKEND_ROOT}/auth/google`, "_self");
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.accountForm}>
        <h1 className={styles.headingOne}>Log in to Trello</h1>
        <div className={styles.mainContainer}>
          <div className={styles.loginForm}>
            <input
              type="text"
              value={val}
              className={styles.formField}
              name="user"
              placeholder="Enter email"
              onChange={(e) => setVal(e.target.value)}
            />
            <input
              autoComplete="off"
              value={pass}
              type="password"
              className={styles.formField}
              name="password"
              placeholder="Enter password"
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              onClick={() => dispatch(loginUser(val, pass))}
              className={styles.loginBtn}
            >
              Log in
            </button>
          </div>
          <div className={styles.loginMethods}>
            <div className={styles.loginMethodOr}>OR</div>
            <div className={styles.loginMethodContainer}>
              <OAuthButton
              onClick={xyz}
                label="Google"
                url="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg"
              />
              <OAuthButton
                label="Microsoft"
                url="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/72ece804e5285ab6507e2406157cda3c/microsoft-logo.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
