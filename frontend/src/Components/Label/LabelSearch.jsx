import React from 'react'
import styles from "./label.module.css"

const LabelSearch = ({placeholder}) => {
  return (
    <input className={styles.searchLabels} type="text" placeholder={placeholder} autoComplete='off' />
  )
}

export default LabelSearch