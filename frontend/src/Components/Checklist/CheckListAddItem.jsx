import React from 'react'
import styles from './checklist.module.css'
import {useState} from 'react'
import CheckListAddItemTextarea from './CheckListAddItemTextarea'

const CheckListAddItem = ({id}) => {
    const [isActive, setIsActive] = useState(false)
    const handleActive = (bool) => {
        setIsActive(bool)
    }
  return (
    <div style={{marginLeft:"40px",marginTop: "8px"}}>
        {!isActive && <button onClick={() => setIsActive(true)} className={styles.checklistButton}>Add an item</button>}
        {isActive && <CheckListAddItemTextarea id={id} handleActive={handleActive} />}
    </div>
  )
}

export default CheckListAddItem