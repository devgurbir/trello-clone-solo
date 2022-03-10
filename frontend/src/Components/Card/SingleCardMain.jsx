import React from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import SingleCardAside from './SingleCardAside'
import SingleCardContent from './SingleCardContent'

const SingleCardMain = () => {
  return (
    <>
        <FlexDiv justify="space-between" style={{marginTop:"18px"}}>
                <SingleCardContent />
                <SingleCardAside />
        </FlexDiv>
    </>
  )
}

export default SingleCardMain