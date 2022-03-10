import React from 'react'
import styles from './card.module.css'
import SingleCardHeader from './SingleCardHeader'
import SingleCardMain from './SingleCardMain'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getCard } from '../../Redux/Card/actions'
import getBearerToken from "../../Utils/GetBearerToken"
import SingleCardCover from "./SingleCardCover"
const SingleCard = () => {

  const dispatch = useDispatch()
  // 6221d3ad9e0712f33b5cff60
  const {card_id} = useParams()  
  const token = getBearerToken()
  const cover = useSelector(state => state.singleCard.card.cover);

  useEffect( () => {
      dispatch(getCard(card_id, token))
  }, [])

  return (
    <div className={styles.card}>
        {cover && <SingleCardCover color={cover} /> }
        {/* Single Card Header */}
        <div style={{padding: "18px"}}>
        <SingleCardHeader />
        
        {/* Single Card Main */}
        
        <SingleCardMain />

        {/* Single Card Widgets */}
        </div>
    </div>
  )
}

export default SingleCard