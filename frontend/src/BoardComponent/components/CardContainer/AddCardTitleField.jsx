/** @format */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewFormTitle } from "../../../Redux/Actions";
import styles from "../../styles/Column.module.css";

const AddCardTitleField = ({ cards, column, grpIndex }) => {
  const [addCardTitle, setAddCardTitle] = useState("");
  const [toggleNewCard, setToggleNewCard] = useState(false);
  const dispatch = useDispatch();
  const addCardTitleField = () => {
    if (!addCardTitle) {
      return;
    }

    const newAddCard = {
      id: Math.random().toString(36).substring(2, 8),
      boardId: column[grpIndex].boardId,
      columnId: column[grpIndex].id,
      title: addCardTitle.trim(),
      cover: null,
    };
    console.log("cards", column[grpIndex]);
    let newColumn = { ...column };
    newColumn[grpIndex].cardOrder.push(newAddCard.id);
    newColumn[grpIndex].cards.push(newAddCard);
    addNewFormTitle(newColumn)(dispatch);
  };

  const toggleNewColumnCard = () => setToggleNewCard(!toggleNewCard);

  return (
    <div>
      {toggleNewCard && (
        <div>
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

          <div style={{ marginTop: "10px" }}>
            <Button onClick={addCardTitleField} className={styles.buttonClass}>
              Add Card
            </Button>
            <span
              onClick={toggleNewColumnCard}
              className={styles.spanIconFrame}
            >
              <i className="fa fa-times"></i>
            </span>
          </div>
        </div>
      )}
      {!toggleNewCard && (
        <footer onClick={toggleNewColumnCard} className={styles.footer}>
          <div className={styles.footerAction}>
            <i
              className="fa fa-plus"
              style={{ fontSize: "14px", marginRight: "10px" }}
            />
            Add another Card
          </div>
        </footer>
      )}
    </div>
  );
};

export default AddCardTitleField;
