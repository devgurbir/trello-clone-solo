import React from "react";
import styles from "./list.module.css";
import ListTitleTextarea from "./ListTitleTextarea";

const ListHeader = ({ title }) => {
  return (
    <div className={styles.listHeader}>
      <ListTitleTextarea title={title} />
    </div>
  );
};

export default ListHeader;
