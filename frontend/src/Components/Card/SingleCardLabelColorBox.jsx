import React from 'react'
import styles from "./card.module.css"
const SingleCardLabelColorBox = ({text, color}) => {
  return (
    <span className={styles.singleCardLabelColorBox} style={{background: color}}>
        {text}
    </span>
  )
}

export default SingleCardLabelColorBox