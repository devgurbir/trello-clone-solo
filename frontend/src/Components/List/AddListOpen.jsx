import React, { useState } from "react";
import styles from "./list.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createList } from "../../Redux/Board/actions";
import getBearerToken from "../../Utils/GetBearerToken";

const AddListOpen = ({ handleSetAdd }) => {
  const [listTitle, setlistTitle] = useState("");
  const dispatch = useDispatch();
  const { board_id } = useParams();
  console.log(board_id);
  const token = getBearerToken();
  return (
    <div
      className={styles.addCardOpen}
      style={{
        backgroundColor: "#ebecf0",
        padding: "8px",
      }}
    >
      <input
        className={styles.addListTextarea}
        placeholder="Enter list title"
        value={listTitle}
        onChange={(e) => setlistTitle(e.target.value)}
      />
      <div>
        <button
          onClick={() => dispatch(createList(listTitle, board_id, token))}
        >
          Add List
        </button>
        <CloseIcon
          onClick={handleSetAdd}
          fontSize="medium"
          sx={{ color: "#6b778c" }}
        />
      </div>
    </div>
  );
};

export default AddListOpen;
