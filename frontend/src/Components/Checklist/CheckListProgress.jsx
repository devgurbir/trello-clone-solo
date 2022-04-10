import React from "react";
import styles from "./checklist.module.css";

const CheckListProgress = ({ progress }) => {
  return (
    <div className={styles.checkListProgress}>
      <span className={styles.checklistProgressPercentage}>{progress}%</span>
      <div className={styles.checkListProgressBar}>
        <div
          style={{ width: `${progress}%` }}
          className={styles.checklistProgresBarCurrent}
        ></div>
      </div>
    </div>
  );
};

export default CheckListProgress;
