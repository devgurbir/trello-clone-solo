/** @format */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewFormTitle } from "../../../Redux/Actions";
import styles from "../../styles/Column.module.css";

const AddCardTitleField = ({ cards, column, grpIndex }) => {
  const [addCardTitle, setAddCardTitle] = useState("");
  const dispatch = useDispatch();
  const addCardTitleField = () => {
    if (!addCardTitle) {
      return;
    }

    const newAddCard = {
      id: Math.random().toString(36).substring(2, 8),
      title: addCardTitle.trim(),
      boardId: cards[0].boardId,
      columnId: cards[0].columnId,
      cover: null,
    };
    let newColumn = { ...column };
    newColumn[grpIndex].cardOrder.push(newAddCard.id);
    newColumn[grpIndex].cards.push(newAddCard);
    addNewFormTitle(newColumn)(dispatch);
  };

  return (
    <>
      <Form.Control
        type="text"
        size="sm"
        className={styles.addNewColumnForm}
        placeholder="add  text"
        as="textarea"
        rows="3"
        value={addCardTitle}
        onKeyDown={(e) => e.key === "Enter" && addCardTitleField()}
        onChange={(e) => setAddCardTitle(e.target.value)}
      />
    </>
  );
};

export default AddCardTitleField;
