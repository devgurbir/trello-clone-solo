/** @format */

import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalRemoveColumn = (props) => {
  // console.log("pro", props);
  const { title, show, onAction } = props;
  const [contentList, setContentList] = useState("");

  useEffect(() => {
    setContentList(props.content);
  }, [props.content]);

  return (
    <Modal
      show={show}
      backdrop="static"
      animation={false}
      onHide={() => onAction("close")}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{contentList}</Modal.Body>
      <Modal.Footer style={{ marginTop: "45px" }}>
        <Button variant="secondary" onClick={() => onAction("close")}>
          Close
        </Button>
        <Button variant="primary" onClick={() => onAction("confirm")}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRemoveColumn;
