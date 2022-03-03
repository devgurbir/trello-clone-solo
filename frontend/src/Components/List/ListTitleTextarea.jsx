import React from 'react'
import styles from './list.module.css'
import { useState } from 'react'

const ListTitleTextarea = () => {
const [isEditing, setIsEditing] = useState(false)
  if(isEditing){
      return <textarea spellcheck="false" onBlur = { () => setIsEditing(false)} className={styles.listTitle + " " + styles.isEditing} value="Editing List Title Textarea" />
  }
  else{
      return <textarea spellcheck="false" onFocus = { () => setIsEditing(true)} className={styles.listTitle} value="List Title Textarea" />
  }
}

export default ListTitleTextarea