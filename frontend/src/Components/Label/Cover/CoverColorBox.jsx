import React from 'react'
import styles from "./cover.module.css"
import DoneIcon from '@mui/icons-material/Done';
import { updateCover } from '../../../Redux/Card/actions';
import {useDispatch} from "react-redux"
import { useParams } from 'react-router-dom';


const CoverColorBox = ({name,color,selected,handleColorSelect}) => {
    const dispatch = useDispatch();
    const {card_id} = useParams();
  return (
    <span onClick = {() => {
        handleColorSelect(name)
        dispatch(updateCover(card_id, color))
        }} style={{backgroundColor: color, display:"flex", justifyContent:"center", alignItems:"center" }} className={styles.coverColorBox} >
        {selected && <DoneIcon sx={{fontSize:"16px", color:"white", fontWeight:"bold"}}/> }
    </span>
  )
}

export default CoverColorBox