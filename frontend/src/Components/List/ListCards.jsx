import React from "react";
import SingleListCard from "../Card/SingleListCard";
import AddCard from "./AddCard";

import StyledListCardWrapper from "./Styled/StyledListCardWrapper";

const ListCards = ({ cards, id }) => {
  return (
    <StyledListCardWrapper>
      {cards?.map((el) => (
        <SingleListCard key={el._id} id={el._id} title={el.title} />
      ))}
      {/* <AddCard /> */}
      <AddCard id={id} />
    </StyledListCardWrapper>
  );
};

export default ListCards;
