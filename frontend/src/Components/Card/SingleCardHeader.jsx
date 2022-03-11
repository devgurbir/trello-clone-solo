import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './card.module.css'
import SingleCardTitle from './SingleCardTitle'
import { useSelector } from 'react-redux'
import SingleCardCover from "./SingleCardCover"
import {Link} from 'react-router-dom'
const SingleCardHeader = () => {
  const cover = useSelector(state => state.singleCard.card.cover);
  const y = useSelector(state => state.singleCard?.card?.boardId)

  return (
    <div className={styles.cardHeader}>        
            <SingleCardTitle />
            <div className={styles.cardClose}>
                <Link to={`/board/${y}`}><FontAwesomeIcon style={{color:"black"}} icon={faXmark} size="xl" /></Link>
            </div>
    </div>
  )
}

export default SingleCardHeader