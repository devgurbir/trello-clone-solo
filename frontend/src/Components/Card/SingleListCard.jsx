import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StyledListCard from "./Styled/StyledListCard";
import { getCard } from "../../Redux/Card/actions";
import { useDispatch } from "react-redux";

const SingleListCard = ({ id, title }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCard(id));
  // }, []);
  return (
    <Link
      to={`/card/${id}`}
      style={{ color: "#172b4d", textDecoration: "none" }}
    >
      <StyledListCard>{title}</StyledListCard>
    </Link>
  );
};

export default SingleListCard;
