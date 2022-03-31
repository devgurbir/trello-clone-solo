import React from "react";
import styles from "./list.module.css";
import ListTitleTextarea from "./ListTitleTextarea";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ListActionsPopup from "./ListActionsPopup";
import { useState } from "react";
const ListHeader = ({ title }) => {
  const [showActions, setShowActions] = useState(false);

  const handleShowPopup = (bool) => setShowActions(bool);
  return (
    <div className={styles.listHeader}>
      <ListTitleTextarea title={title} />
      <MoreHorizIcon
        className={styles.threeDots}
        onClick={() => handleShowPopup(true)}
        fontSize="small"
      />
      {showActions && <ListActionsPopup handleShowPopup={handleShowPopup} />}
    </div>
  );
};

export default ListHeader;
