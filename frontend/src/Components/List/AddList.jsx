import React from "react";
import { useState } from "react";
import styles from "./list.module.css";
import AddListOpen from "./AddListOpen";
import AddListClose from "./AddListClose";
const AddList = () => {
  const [isAdding, setIsAdding] = useState(false);
  const handleSetAdd = () => {
    setIsAdding(!isAdding);
  };
  return (
    <div className={styles.addList}>
      {isAdding ? (
        <AddListOpen handleSetAdd={handleSetAdd} />
      ) : (
        <AddListClose handleSetAdd={handleSetAdd} />
      )}
    </div>
  );
};

export default AddList;
