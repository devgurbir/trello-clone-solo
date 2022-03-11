/** @format */

import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateColumnTitleAction } from "../../../Redux/Actions";
import styles from "../../styles/Column.module.css";

const TitleFormHandle = ({ title, col }) => {
  const [addFormTitle, setAddFormTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setAddFormTitle(title);
  }, [title]);

  const handleInlineTextChange = (e) => {
    e.preventDefault();
    setAddFormTitle(e.target.value);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
      const newColumn = {
        ...col,
        title: addFormTitle,
      };
      console.log({ newColumn });
      updateColumnTitleAction(newColumn._id, newColumn.title)(dispatch);
    }
  };

  return (
    <>
      <Form.Control
        type="text"
        size="lg"
        spellCheck="false"
        className={styles.titleFormChange}
        value={addFormTitle}
        onKeyDown={handleEnterKey}
        onChange={handleInlineTextChange}
      />
    </>
  );
};
export default TitleFormHandle;
