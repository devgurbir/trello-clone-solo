/** @format */
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNewRow } from "../../../Api";
import { addNewRowAction } from "../../../Redux/Actions";
import styles from "../../styles/Column.module.css";
import getBearerToken from "../../../Utils/GetBearerToken";

const AddCardTitleField = ({ cards, column, grpIndex }) => {
  const dispatch = useDispatch();
  const [addCardTitle, setAddCardTitle] = useState("");
  const [toggleNewCard, setToggleNewCard] = useState(false);

  // const { boards } = useSelector((state) => state.boards);

  const addCardTitleField = async () => {
    if (!addCardTitle) {
      return;
    }
    const token = getBearerToken();
    const newAddCard = {
      boardId: column[grpIndex].boardId,
      columnId: column[grpIndex]._id,
      title: addCardTitle.trim(),
    };

    // let newColumn = { ...column };
    // newColumn[grpIndex].cardOrder.push(newAddCard.columnId);
    // newColumn[grpIndex].row.push(newAddCard);
    // delete boards[0].columns;
    // boards[0].columns = [newColumn];
    addNewRowAction(newAddCard, token)(dispatch);
    // await createNewRow(newAddCard);
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
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </div>
        </div>
      )}
      {!toggleNewCard && (
        <footer onClick={toggleNewColumnCard} className={styles.footer}>
          <div className={styles.footerAction}>
            <FontAwesomeIcon
              style={{ fontSize: "14px", marginRight: "10px" }}
              icon={faPlus}
            />
            Add another Card
          </div>
        </footer>
      )}
    </div>
  );
};

export default AddCardTitleField;
