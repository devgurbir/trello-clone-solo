import React, { useState } from "react";
import styles from "./checklist.module.css";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateChecklistItem } from "../../Redux/Card/actions";

const CheckListItem = ({ _id, complete, title, checklist_id }) => {
  const [checked, setChecked] = useState(complete);
  const dispatch = useDispatch();
  const { card_id } = useParams();

  return (
    <div className={styles.checkListItem}>
      <Checkbox
        checked={checked}
        sx={{ padding: 0 }}
        onClick={() => {
          dispatch(updateChecklistItem(card_id, checklist_id, _id, !checked));
          setChecked(!checked);
        }}
      />
      {checked ? (
        <span
          style={{
            marginBottom: 0,
            minHeight: "20px",
            textDecoration: "line-through",
          }}
        >
          {title}
        </span>
      ) : (
        <span style={{ marginBottom: 0, minHeight: "20px" }}>{title}</span>
      )}
    </div>
  );
};

export default CheckListItem;
