import styles from "./loginSignup.module.css";

import React from "react";
import redirectTo from "../../Utils/RedirectTo";

const OAuthButton = ({ url, label, loginUrl = "#" }) => {
  console.log(process.env.REACT_APP_BACKEND_ROOT);
  return (
    <div style={{ marginBottom: "12px" }}>
      <div className={styles.oauthBtn} onClick={() => redirectTo(loginUrl)}>
        <span className={styles.oauthIcon}>
          <img src={url} />
        </span>
        <span className={styles.oauthLabel}>Continue with {label}</span>
      </div>
    </div>
  );
};

export default OAuthButton;
