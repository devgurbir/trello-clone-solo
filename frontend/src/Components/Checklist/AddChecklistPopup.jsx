import React, { useState } from 'react'
import styles from './checklist.module.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddButton from './AddButton';
import { addChecklist } from '../../Redux/Card/actions'

const AddChecklistPopup = ({handleShowPopup}) => {
    const [val, setVal] = useState("Checklist");    
    
    const {card_id} = useParams();
    const dispatch = useDispatch();
    console.log(val)
  return (
    <div className={styles.popup}>
        <div className={styles.popupHeaderTitle}>
            <span style={{textAlign:"center"}}>Add Checklist</span>
            <CloseOutlinedIcon onClick = {() => handleShowPopup(false)} className={styles.popUpHeaderClose} fontSize="small" sx={{color:"#6b778c", textAlign:"right"}}/>
        </div>
        <div className={styles.popOverContent}>
            <h4>Title</h4>
            <input type="text" autoFocus value={val} onChange = {(e) => setVal(e.target.value)} className={styles.popUpInput + " " + styles.input}/>
        </div>
        {/* <AddButton handleShowPupup = {handleShowPopup} title={val} /> */}
        <div>
        
        <button className={styles.addButtonBlue} onClick = {() => {
          dispatch(addChecklist(card_id, val))
          handleShowPopup(false)
        }}>Add</button>
    </div>
    </div>
  )
}

export default AddChecklistPopup