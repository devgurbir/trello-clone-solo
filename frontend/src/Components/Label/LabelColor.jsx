import React from 'react'
import styles from "./label.module.css"
import EditIcon from '@mui/icons-material/EditOutlined';
import LabelSelected from './LabelSelected';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateLabels } from '../../Redux/Card/actions';

const LabelColor = ({ind, color, text, selected}) => {
  const labels = useSelector(state => state.singleCard.card.labels);
  const dispatch = useDispatch();
  const {card_id} = useParams()
  const handleClick = (labels, selected, ind) => {    
    labels[ind] = {...labels[ind], selected: !selected };
    dispatch(updateLabels(card_id, labels));
    // console.log(labels)
  }
  return (
    <div style={{display:"flex", gap:"15px",}}>
        <span onClick = {() => handleClick(labels, selected, ind)} className={styles.labelCard} style={{textAlign:"center", background: color, width:"100%"}}>
            <span style={{color:"#fff"}}>{text}</span>
            {selected && <LabelSelected />}
        </span>
        <EditIcon fontSize="14" sx={{marginTop:"4px"}}/>
    </div>
  )
}

export default LabelColor