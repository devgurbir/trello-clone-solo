import React from 'react'
import styles from "./workspace.module.css"
const BoardBox = ({text}) => {
  return (
    <div className={styles.boardBox}>
        {text}
    </div>
  )
}

export default BoardBox