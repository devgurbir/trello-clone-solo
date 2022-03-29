import React from "react";
import styles from "./list.module.css";
import { useState, useRef } from "react";

const ListTitleTextarea = ({ title }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const handleEdit = () => {
    setIsEditing(true);
    // inputRef.current.focus();
  };
  return (
    <>
      {isEditing ? (
        <textarea
          ref={inputRef}
          spellcheck="false"
          onBlur={() => setIsEditing(false)}
          className={styles.listTitle + " " + styles.isEditing}
          value={title}
        />
      ) : (
        <textarea
          ref={inputRef}
          spellcheck="false"
          onClick={handleEdit}
          className={styles.listTitle}
          value={title}
        />
      )}
    </>
  );
};

export default ListTitleTextarea;
