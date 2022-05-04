import React from "react";
import styles from "./loginSignup.module.css";
import OAuthButton from "./OAuthButton";
import { useState } from "react";
import { API_ROOT } from "../../Utils/constents";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/User/actions";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [val, setVal] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const xyz = async () => {
    window.open(`${process.env.REACT_APP_BACKEND_ROOT}/auth/google`, "_self");
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.accountForm}>
        <h1 className={styles.headingOne}>Sign up for your account</h1>
        <div className={styles.mainContainer}>
          <div className={styles.loginForm}>
            <input
              onChange={(e) => setVal(e.target.value)}
              type="text"
              className={styles.formField}
              value={val}
              name="user"
              placeholder="Enter email"
              style={{ marginBottom: 0 }}
            />
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              className={styles.formField}
              value={pass}
              name="password"
              placeholder="Enter password"
              style={{ marginBottom: 0 }}
            />
            <p className={styles.tos}>
              By signing up, you confirm that you've read and accepted our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
            {val.includes("@") ? (
              <button
                onClick={() => {
                  dispatch(createUser(val, pass));
                  
                }}
                className={styles.loginBtn}
              >
                Continue
              </button>
            ) : (
              <button className={styles.loginBtn} disabled>
                Continue
              </button>
            )}
          </div>
          <div className={styles.loginMethods}>
            <div className={styles.loginMethodOr}>OR</div>
            <div className={styles.loginMethodContainer}>
              <OAuthButton
                onClick={xyz}
                loginUrl={`${process.env.REACT_APP_BACKEND_ROOT}/auth/google`}
                label="Google"
                url="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg"
              />
              <OAuthButton
                label="Microsoft"
                url="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/72ece804e5285ab6507e2406157cda3c/microsoft-logo.svg"
              />
            </div>
          </div>
          <hr />
          <span className={styles.bottomFormLink}>
            <a href="/login">Already have an account? Log In</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
