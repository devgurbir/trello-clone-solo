import React from "react";
import styles from "./checklist.module.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckListItem from "./CheckListItem";
import CheckListAddItem from "./CheckListAddItem";
import CheckListProgress from "./CheckListProgress";
import { useState } from "react";

const ChecklistWrapper = ({ title, items, _id }) => {
  let completedItems = 0;
  let progress;
  for (let i = 0; i < items.length; i++) {
    if (items[i].complete == true) {
      completedItems++;
    }
  }
  if (items.length == 0) {
    progress = 0;
  } else {
    progress = ((completedItems / items.length) * 100).toFixed(0);
  }

  return (
    <div className={styles.checklist}>
      {/* Header */}
      <div className={styles.checklistHeader}>
        <CheckBoxOutlinedIcon sx={{ color: "#42526e" }} />
        <div className={styles.checklistTitle}>
          <h3>{title}</h3>
          <button className={styles.checklistButton}>Delete</button>
        </div>
      </div>

      {/* Progress Bar */}
      <CheckListProgress progress={progress} />

      <div className={styles.checkListItemsList}>
        {items?.map((el) => (
          <CheckListItem {...el} key={el._id} checklist_id={_id} />
        ))}
      </div>
      <CheckListAddItem id={_id} />
    </div>
  );
};

export default ChecklistWrapper;
