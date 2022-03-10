import React, { useState } from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './card.module.css'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import LabelWrapper from "../Label/LabelWrapper"

const LabelAsideOption = () => {
    const [showPopup, setShowPopup] = useState(false)
    
    const handleShowPopup = (bool) => setShowPopup(bool)
  return (
      <>
    <button onClick = {() => setShowPopup(true)} type="button" className={styles.buttonLink}>
        <FlexDiv align='center' gap="10px">
            <FontAwesomeIcon icon={faCheckSquare} size="sm" />
            <span>Labels</span>
        </FlexDiv>
    </button>
    {showPopup && <LabelWrapper handleShowPopup={handleShowPopup} /> }
    </>
  )
}

export default LabelAsideOption