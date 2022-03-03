import React from 'react'
import styles from './card.module.css'
import SingleCardHeader from './SingleCardHeader'
import SingleCardMain from './SingleCardMain'

const SingleCard = () => {
  return (
    <div className={styles.card}>
        {/* Single Card Header */}
        <SingleCardHeader />
        
        {/* Single Card Main */}
        
        <SingleCardMain />

        {/* Single Card Widgets */}
    </div>
  )
}

export default SingleCard