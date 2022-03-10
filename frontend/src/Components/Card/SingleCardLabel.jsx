import React from 'react'
import { useSelector } from 'react-redux';
import SingleCardLabelColorBox from './SingleCardLabelColorBox';
import styles from './card.module.css'
const SingleCardLabel = () => {
    const labels = useSelector( state => state.singleCard.card.labels);
  return (
    <div style={{marginLeft: "32px"}}>
        <h3 className={styles.headerThree}>Labels</h3>
        <div>
            {labels?.map( (el) => el.selected == true ? <SingleCardLabelColorBox color={el.color}  text={el.text} /> : null) }
        </div>

    </div>
  )
}

export default SingleCardLabel