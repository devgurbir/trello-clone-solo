import React from 'react'
import styles from "./label.module.css"
import LabelSearch from './LabelSearch'
import LabelsMain from './LabelsMain'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const SelectLabelInterface = ({handleShowPopup, handleShowCreateLabel}) => {
  return (
      <>
        <div className={styles.popupHeaderTitle}>
            <span style={{textAlign:"center"}}>Labels</span>
            <CloseOutlinedIcon onClick = {() => handleShowPopup(false)} className={styles.popUpHeaderClose} fontSize="small" sx={{color:"#6b778c", textAlign:"right"}}/>
        </div>
      
        <div className ={styles.popOverContent}>
            <LabelSearch placeholder="Search labels..." />
            <div className= {styles.labelSection} >
                <h4>Labels</h4>
                <LabelsMain />
            </div>
            <div style={{marginBottom:"8px"}}>
                <button onClick = { () => handleShowCreateLabel(true) } style={{width:"100%", backgroundColor: "#091e420a"}} className="button">Create a new label</button>
                <hr />
                <button style={{width:"100%", backgroundColor: "#091e420a"}} className="button">Enable color blind friendly mode</button>
            </div>
        </div>
        </>
  )
}

export default SelectLabelInterface