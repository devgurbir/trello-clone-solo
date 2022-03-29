import React from "react";
import AddIcon from "@mui/icons-material/Add";
import styles from "./list.module.css";

const AddListClose = ({ handleSetAdd }) => {
  return (
    <div onClick={handleSetAdd} className={styles.addListClose}>
      <AddIcon fontSize="small" />
      <span>Add another list</span>
    </div>
  );
};

export default AddListClose;
