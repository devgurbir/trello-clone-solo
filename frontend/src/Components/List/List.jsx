import React from 'react'
import ListHeader from './ListHeader.jsx'
import StyledListContent from './Styled/StyledListContent.jsx'
import StyledListWrapper from './Styled/StyledListWrapper.jsx'
import ListCards from './ListCards.jsx'

const cardArr = ["Card #1", "Card #2", "Card #3"]

const List = () => {
  return (
    <StyledListWrapper>
        <StyledListContent>
          {/* List Header */}
          <ListHeader />
          
          {/* List Cards */}
          <ListCards cards = {cardArr} />                
          
        {/* <div>Add Card</div> */}
        </StyledListContent>
    </StyledListWrapper>
  )
}

export default List