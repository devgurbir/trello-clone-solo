import React from 'react'
import styles from './checklist.module.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
    createMachine, state, transition,
    interpret,
    invoke
  } from 'robot3';


export const confirmationFlow = createMachine({
    initial: state(
        transition('begin', 'confirming')
    ),
    confirming: state(
        transition('cancel', 'initial'),
        transition('confirm', 'loading')
    ),
    loading: state(
        transition('done', 'initial')
    )
})

const DeleteModal = ({handleClosePopup, checklist_id, makeAPIReq}) => {
   

  return (
    <div className={styles.popup}>
        <div className={styles.popupHeaderTitle}>
            <span style={{textAlign:"center"}}>Delete Checklist?</span>
            <CloseOutlinedIcon onClick = {() => handleClosePopup()} className={styles.popUpHeaderClose} fontSize="small" sx={{color:"#6b778c", textAlign:"right"}}/>
        </div>
        <div className={styles.popOverContent}>
            <span>Deleting a checklist is permanent and there is no way to get it back.</span>
            <div >
            <button className={styles.deleteBtn} onClick={makeAPIReq}>Delete Checklist</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal