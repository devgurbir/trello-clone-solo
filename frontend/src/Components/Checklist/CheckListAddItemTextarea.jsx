import React, {useRef, useState} from 'react'
import styles from './checklist.module.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FlexDiv from '../../Styled/FlexDiv';
import { addItemChecklist } from '../../Redux/Card/actions';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CheckListAddItemTextarea = ({id, handleActive}) => {
    const {card_id} = useParams();
    const dispatch = useDispatch();
    const [val, setVal] = useState("");
    const inputRef = useRef(null)
  return (
        <div>
            <textarea ref={inputRef} onChange={ (e) => setVal(e.target.value)} value={val} placeholder="Add an item" className={styles.checkListAddItem} autoFocus />
            {/* {val.length > 0 && <textarea value={val} placeholder="Add an item" onChange={ (e) => setVal(e.target.value)} className={styles.checkListAddItem} /> } */}
            <FlexDiv align="center" justify="space-between">
                <FlexDiv align="center" gap="8px">
                    <button onClick = {() => {
                        if(val.length > 0){
                            dispatch( addItemChecklist(card_id, id, val) )
                            setVal("");
                            inputRef.current.focus()
                            // handleActive(false)
                        }
                    }} className={styles.addButtonBlue}>Add</button>
                    <CloseOutlinedIcon onClick={() => handleActive(false)} fontSize="medium" sx={{color:"#42526e"}}/>
                </FlexDiv>

                <FlexDiv align="center" style={{marginTop:"8px"}}>
                    <button className={styles.checklistAddItemsControl}>Assign</button>                  
                    <button className={styles.checklistAddItemsControl}>Due Data</button>
                    <button className={styles.checklistAddItemsControl}><AlternateEmailOutlinedIcon fontSize="small" /></button>
                    <button className={styles.checklistAddItemsControl}><SentimentSatisfiedOutlinedIcon fontSize="small" /></button>
                </FlexDiv>
            </FlexDiv>
        </div>
  )
}

export default CheckListAddItemTextarea