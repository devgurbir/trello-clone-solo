import React from "react";
import styles from "./loginSignup.module.css";
import OAuthButton from "./OAuthButton";
import { useState } from "react";
import { API_ROOT } from "../../Utils/constents";
import GoogleLogin from "react-google-login";

const Signup = () => {
  const [val, setVal] = useState("");

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
              name="user"
              placeholder="Enter email"
              style={{ marginBottom: 0 }}
            />
            <p className={styles.tos}>
              By signing up, you confirm that you've read and accepted our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
            {val.includes("@") ? (
              <button className={styles.loginBtn}>Continue</button>
            ) : (
              <button className={styles.loginBtn} disabled>
                Continue
              </button>
            )}
          </div>
          <div className={styles.loginMethods}>
            <div className={styles.loginMethodOr}>OR</div>
            <div className={styles.loginMethodContainer}>
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              ,
              <OAuthButton
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
