import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './card.module.css'
import SingleCardTitle from './SingleCardTitle'
import { useSelector } from 'react-redux'
import SingleCardCover from "./SingleCardCover"

const SingleCardHeader = () => {
  const cover = useSelector(state => state.singleCard.card.cover);
  console.log("The cover is ", cover)
  return (
    <div className={styles.cardHeader}>
        
            <SingleCardTitle />
            <div className={styles.cardClose}>
                <FontAwesomeIcon icon={faXmark} size="xl" />
            </div>
    </div>
  )
}

export default SingleCardHeader