import React from 'react'
import styles from './card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const SingleCardTitle = () => {
const [isEditing, setIsEditing] = useState(false)
const [val, setVal] = useState("Default value")
  return (
    <div className={styles.flexClass} style={{ flexGrow: "1"}}>
        <div>
        <FontAwesomeIcon icon={faWindowMaximize} size="lg" />
        </div>
        <div style={{display: "flex", flexDirection: 'column', flexGrow: "1"}}>
            {!isEditing && <textarea onFocus = {() => setIsEditing(!isEditing)} style={{ width: "100%"}} className = {styles.singleCardTextarea} defaultValue={val} /> }
            {isEditing && <textarea onChange = {e => setVal(e.target.value)} onBlur = {() => setIsEditing(false)} style={{ width: "100%"}} className = {styles.singleCardTextarea + " " + styles.isEditing} defaultValue={val} />}
            <span className = {styles.singleCardInList}>in list To Do</span>   
        </div>
    </div>
    
  )
}

export default SingleCardTitle