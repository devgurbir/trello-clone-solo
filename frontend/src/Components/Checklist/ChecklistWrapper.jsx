import React from "react";
import styles from "./checklist.module.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckListItem from "./CheckListItem";
import CheckListAddItem from "./CheckListAddItem";
import CheckListProgress from "./CheckListProgress";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { useMachine } from "react-robot";
import { confirmationFlow } from "./DeleteModal";
import { useDispatch } from 'react-redux';
import { getUser } from "../../Redux/User/actions";
import { deleteChecklist } from "../../Redux/Card/actions";
import { useParams } from "react-router-dom";

const ChecklistWrapper = ({ title, items, _id }) => {
  const {card_id} = useParams()
  const dispatch = useDispatch()
  const [current, send] = useMachine(confirmationFlow);
  // const [showPopup, setShowPopup] = useState(false)
  //   const handleShowPopup = (bool) => setShowPopup(bool)
  
  const handleOpenPopup = () => {
    send('begin') 
  }

  const handleClosePopup = () => {
    send('cancel')
  }

  

  const makeAPIReq = () => {
    send('confirm')
    dispatch(deleteChecklist(card_id, _id))
    send('done');
    
    
  }

  let completedItems = 0;
  let progress;
  for (let i = 0; i < items.length; i++) {
    if (items[i].complete == true) {
      completedItems++;
    }
  }
  if (items.length == 0) {
    progress = 0;
  } else {
    progress = ((completedItems / items.length) * 100).toFixed(0);
  }

  return (
    <div className={styles.checklist}>
      {/* Header */}
      <div className={styles.checklistHeader}>
        <CheckBoxOutlinedIcon sx={{ color: "#42526e" }} />
        <div className={styles.checklistTitle}>
          <h3>{title}</h3>
          <div>
          <button onClick={() => handleOpenPopup()} className={styles.checklistButton}>Delete</button>
          {current.name == 'confirming' && <DeleteModal makeAPIReq={makeAPIReq} handleClosePopup={handleClosePopup} /> }
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <CheckListProgress progress={progress} />

      <div className={styles.checkListItemsList}>
        {items?.map((el) => (
          <CheckListItem {...el} key={el._id} checklist_id={_id} />
        ))}
      </div>
      <CheckListAddItem id={_id} />
    </div>
  );
};

export default ChecklistWrapper;
