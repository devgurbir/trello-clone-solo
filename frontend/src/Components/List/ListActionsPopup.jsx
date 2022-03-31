import React from "react";
import styles from "./list.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
// import DoneIcon from "@mui/icons-material/Done";
// import getBearerToken from "../../Utils/GetBearerToken";
// import { createBoard } from "../../Redux/Workspace/actions";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";

const ListActionsPopup = ({ handleShowPopup }) => {
  return (
    <div className={styles.popUp}>
      <div className={styles.popupHeaderTitle}>
        <span style={{ textAlign: "center" }}>List Actions</span>
        <CloseOutlinedIcon
          onClick={() => handleShowPopup(false)}
          className={styles.popUpHeaderClose}
          fontSize="small"
          sx={{ color: "#6b778c", textAlign: "right" }}
        />
      </div>
    </div>
  );
};

export default ListActionsPopup;
