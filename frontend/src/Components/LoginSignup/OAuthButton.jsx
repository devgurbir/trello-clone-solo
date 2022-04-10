import styles from "./loginSignup.module.css";

import React from "react";
import redirectTo from "../../Utils/RedirectTo";
import { Link } from "react-router-dom";
import axios from "axios";

const OAuthButton = ({ onClick, url, label, loginUrl = "#" }) => {
  console.log(process.env.REACT_APP_BACKEND_ROOT);
  return (
    <div onClick={onClick} style={{ marginBottom: "12px" }}>
      {/* <div className={styles.oauthBtn} onClick={() => redirectTo(loginUrl)}> */}
      <div className={styles.oauthBtn}>
        <span className={styles.oauthIcon}>
          <img src={url} />
        </span>
        <span className={styles.oauthLabel}>Continue with {label}</span>
      </div>
    </div>
  );
};

export default OAuthButton;
