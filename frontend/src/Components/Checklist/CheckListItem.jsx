import React, {useState} from 'react'
import styles from './checklist.module.css'
import Checkbox from '@mui/material/Checkbox';


const CheckListItem = ({ _id, complete, title}) => {
  const [checked, setChecked] = useState(complete)
  return (
    <div className={styles.checkListItem}>
        <Checkbox checked={checked} sx={{padding:0}} />
        <span style={{marginBottom: 0, minHeight: "20px"}}>{title}</span>
    </div>
  )
}

export default CheckListItem