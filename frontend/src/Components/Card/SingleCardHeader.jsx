import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './card.module.css'
import SingleCardTitle from './SingleCardTitle'


const SingleCardHeader = () => {
  return (
    <div className={styles.cardHeader}>
        
        <>
            <SingleCardTitle />
            <div>
                <FontAwesomeIcon icon={faXmark} size="lg" />
            </div>
        </>
    </div>
  )
}

export default SingleCardHeader