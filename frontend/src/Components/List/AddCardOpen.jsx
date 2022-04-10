import React from "react";
import styles from "./list.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { createCard } from "../../Redux/Board/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import getBearerToken from "../../Utils/GetBearerToken";

const AddCardOpen = ({ handleSetAdd, id }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const token = getBearerToken();
  const board_id = useSelector((state) => state.board.board._id);
  return (
    <div className={styles.addCardOpen}>
      <textarea
        className={styles.addCardTextarea}
        placeholder="Enter a title for this card"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <button
          onClick={() => {
            dispatch(createCard(title, id, board_id, token));
            setTitle("");
          }}
        >
          Add card
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

export default AddCardOpen;
