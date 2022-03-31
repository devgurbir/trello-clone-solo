import React from "react";
import styles from "./workspace.module.css";

import { useState } from "react";
import CreateBoardPopup from "../Board/CreateBoardPopup";

const CreateBoardBox = () => {
  const [showCreateBoardPopup, setShowCreateBoardPopup] = useState(false);
  const handleShowPopup = (bool) => setShowCreateBoardPopup(bool);
  return (
    <>
      <div
        onClick={() => {
          // dispatch(createBoard(title, workspace_id, token))
          setShowCreateBoardPopup(true);
        }}
        className={styles.boardBox}
      >
        Create new board
      </div>
      {showCreateBoardPopup && (
        <CreateBoardPopup handleShowPopup={handleShowPopup} />
      )}
    </>
  );
};

export default CreateBoardBox;
