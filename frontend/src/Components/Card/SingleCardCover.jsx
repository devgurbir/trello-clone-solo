import React from 'react'
import styles from './card.module.css'

const SingleCardCover = ({color}) => {
  return (
    <div className={styles.singleCardCover} style={{background: color}} >

    </div>
  )
}

export default SingleCardCover