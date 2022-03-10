import React from 'react'
import styles from "./label.module.css"

const CreateLabelInput = ({value, handleLabelName}) => {
    
  return (
    <input className={styles.searchLabels} value={value} type="text" onChange = { (e) => handleLabelName(e.target.value) }autoComplete='off' />
  )
}

export default CreateLabelInput