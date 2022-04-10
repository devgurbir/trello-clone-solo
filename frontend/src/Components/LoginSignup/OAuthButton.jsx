import styles from "./loginSignup.module.css";

import React from "react";
import redirectTo from "../../Utils/RedirectTo";
import { Link } from "react-router-dom";

const OAuthButton = ({ url, label, loginUrl = "#" }) => {
  console.log(process.env.REACT_APP_BACKEND_ROOT);
  return (
    <div style={{ marginBottom: "12px" }}>
      {/* <div className={styles.oauthBtn} onClick={() => redirectTo(loginUrl)}> */}
      <div className={styles.oauthBtn}>
        <Link to="https://trello-clone-gurbir.herokuapp.com/auth/google">
          <span className={styles.oauthIcon}>
            <img src={url} />
          </span>
          <span className={styles.oauthLabel}>Continue with {label}</span>
        </Link>
      </div>
    </div>
  );
};

export default OAuthButton;
