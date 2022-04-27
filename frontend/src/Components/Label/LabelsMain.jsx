import React, { useContext } from 'react'
import styles from "./label.module.css"
import LabelColor from './LabelColor'
import { useSelector } from 'react-redux'
import { ColorBlindContext } from '../../Contexts/ColorBlindContextProvider'

const LabelsMain = () => {
  const labels = useSelector(state => state.singleCard.card.labels);
  const {colorBlindMode, setColorBlindMode} = useContext(ColorBlindContext)
  console.log("colorBlindMode", colorBlindMode)
  
  return (
    <div className={styles.labelsMain}  style={{width:"100%", marginTop:"8px"}}>
        {labels.map( (el, ind) => <LabelColor key={ind} ind={ind} 
         color={el.color} text={el.text} selected={el.selected} />  )}
    </div>
  )
}

export default LabelsMain