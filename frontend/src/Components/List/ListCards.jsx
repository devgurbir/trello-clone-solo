import React from 'react'
import SingleListCard from '../Card/SingleListCard'
import StyledListCardWrapper from './Styled/StyledListCardWrapper'

const ListCards = ({cards}) => {
  return (
    <StyledListCardWrapper>
        {cards?.map(el => <SingleListCard info = {el} />)}
    </StyledListCardWrapper>
  )
}

export default ListCards