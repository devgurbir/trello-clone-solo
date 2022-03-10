import React from 'react'
import styles from "./label.module.css"
import LabelColor from './LabelColor'
import { useSelector } from 'react-redux'

const LabelsMain = () => {
  const labels = useSelector(state => state.singleCard.card.labels);
  
  return (
    <div className={styles.labelsMain}  style={{width:"100%", marginTop:"8px"}}>
        {labels.map( (el, ind) => ind < 4 ? <LabelColor key={ind} ind={ind} 
         color={el.color} text={el.text} selected={el.selected} /> : null )}
    </div>
  )
}

export default LabelsMain