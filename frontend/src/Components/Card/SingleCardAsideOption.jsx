import React from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './card.module.css'


const SingleCardAsideOption = ({icon, text, disabled = false}) => {
  return (
    <button type="button" className={styles.buttonLink} disabled={disabled}>
    <FlexDiv align='center' gap="10px">
        <FontAwesomeIcon icon={icon} size="sm" />
        <span>{text}</span>
    </FlexDiv>
    </button>
  )
}

export default SingleCardAsideOption