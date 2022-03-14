/** @format */

import styles from "../../styles/AddColumn.module.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewColumnAction } from "../../../Redux/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { createNewColumn } from "../../../Api";
import { useParams } from "react-router-dom";

const AddColumn = ({ board }) => {
  const dispatch = useDispatch();
  const { board_id } = useParams();

  const formControlRef = useRef(null);
  const [boardData, setBoardData] = useState(board);
  const [toggleForm, setToggleForm] = useState(false);
  const [addFormTitle, setAddFormTitle] = useState("");

  useEffect(() => {
    if (formControlRef && formControlRef.current) {
      formControlRef.current.focus();
    }
  }, [toggleForm]);

  useEffect(() => {
    setBoardData(board);
  }, [board]);

  const toggleNewForm = () => setToggleForm(!toggleForm);
  const addFormField = async () => {
    if (!addFormTitle) {
      formControlRef.current.focus();
      return;
    }
    const newColumnAdd = {
      title: addFormTitle.trim(),
      boardId: boardData._id,
    };
    let newColumn = { ...boardData };
    newColumn.columns.push(newColumnAdd);
    newColumn.columnOrder.push(newColumnAdd.boardId);
    addNewColumnAction(board_id, newColumn)(dispatch);
    await createNewColumn(newColumnAdd);
  };

  return (
    <Container className={styles.addAnotherCol}>
      {!toggleForm && (
        <Row>
          <Col className={styles.addIframeCol} onClick={toggleNewForm}>
            <FontAwesomeIcon
              style={{ fontSize: "14px", marginRight: "10px" }}
              onClick={toggleNewForm}
              icon={faPlus}
            />
            Add another Column
          </Col>
        </Row>
      )}
      {toggleForm && (
        <Row>
          <Col className={styles.formInputColumn}>
            <Form.Control
              type="text"
              size="sm"
              ref={formControlRef}
              className={styles.inputForm}
              placeholder="add column"
              value={addFormTitle}
              onKeyDown={(e) => e.key === "Enter" && addFormField()}
              onChange={(e) => setAddFormTitle(e.target.value)}
            />

            <div style={{ marginTop: "10px" }}>
              <Button className={styles.buttonClass} onClick={addFormField}>
                {" "}
                Add List
              </Button>{" "}
              <span className={styles.spanIconFrame}>
                <FontAwesomeIcon onClick={toggleNewForm} icon={faXmark} />
              </span>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AddColumn;
