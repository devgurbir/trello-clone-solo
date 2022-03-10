import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import styles from "./label.module.css"

const LabelSelected = () => {
  return (
    <span className={styles.labelSelected}>
        <DoneIcon sx={{fontSize:"14px"}} />
    </span>
  )
}

export default LabelSelected