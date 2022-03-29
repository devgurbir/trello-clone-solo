import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import styles from "./list.module.css"

const AddCardClose = ({handleSetAdd}) => {
  return (
    <div onClick={handleSetAdd} className={styles.addCard}>
        <AddIcon />
        <span>Add a card</span>
    </div>
  )
}

export default AddCardClose