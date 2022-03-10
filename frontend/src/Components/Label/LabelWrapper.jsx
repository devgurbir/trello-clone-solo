import React, { useState } from 'react'
import styles from "./label.module.css"
import SelectLabelInterface from './SelectLabelInterface'
import CreateLabel from './CreateLabel'
const labels = [
    {id: 1, color: "red"},
    {id: 2, color: "yellow"},
    {id: 3, color: "blue"},
    {id: 4, color: "green"}
]

const LabelWrapper = ({handleShowPopup}) => {
    const [showCreateLabel, setShowCreateLabel] = useState(false)
    
    // console.log(showCreateLabel)
    const handleShowCreateLabel = (bool) => {
        setShowCreateLabel(bool)
    }
  return (
    <div className={styles.popup}>
        { !showCreateLabel && <SelectLabelInterface handleShowPopup={ handleShowPopup } handleShowCreateLabel={handleShowCreateLabel} /> }
        { showCreateLabel && <CreateLabel handleShowCreateLabel={handleShowCreateLabel} /> }
    </div>
  )
}


export default LabelWrapper