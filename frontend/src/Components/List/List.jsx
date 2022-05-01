import React from "react";
import ListHeader from "./ListHeader.jsx";
import StyledListContent from "./Styled/StyledListContent.jsx";
import StyledListWrapper from "./Styled/StyledListWrapper.jsx";
import ListCards from "./ListCards.jsx";




const List = ({ cards, title, id }) => {
  return (

    <StyledListWrapper>
      <StyledListContent>
        {/* List Header */}
        <ListHeader title={title} />

        {/* List Cards */}
        <ListCards cards={cards} id={id} />

        {/* <div>Add Card</div> */}
      </StyledListContent>
    </StyledListWrapper>
  );
};

export default List;
