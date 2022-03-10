import React from 'react'
import styles from "./label.module.css"
import DoneIcon from '@mui/icons-material/Done';

const CreateLabelColorBox = ({name, color,selected,handleColorSelect}) => {

  return (
    <span onClick = {() => handleColorSelect(name)} style={{backgroundColor: color, display:"flex", justifyContent:"center", alignItems:"center" }} className={styles.createLabelColorBox} >
        {selected && <DoneIcon sx={{fontSize:"16px", color:"white", fontWeight:"bold"}}/> }
    </span>
  )
}

export default CreateLabelColorBox