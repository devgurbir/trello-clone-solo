import React from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import FocusableTextArea from '../FocusableTextArea'
import { useState } from 'react'
import SingleCardContentDescription from './SingleCardContentDescription'
import SingleCardContentActivity from './SingleCardContentActivity'

const SingleCardContent = () => {
    
  return (
    <FlexDiv style={{width:"74%"}} direction="column" gap="15px">
    {/* Description */}
    <SingleCardContentDescription />
    <SingleCardContentActivity />
    </FlexDiv>
  )
}

export default SingleCardContent