import AddCardClose from "./AddCardClose";
import AddCardOpen from "./AddCardOpen";

import React from "react";
import { useState } from "react";

const AddCard = ({ id }) => {
  const [isAdding, setIsAdding] = useState(false);
  const handleSetAdd = () => {
    setIsAdding(!isAdding);
  };
  return (
    <>
      {isAdding ? (
        <AddCardOpen handleSetAdd={handleSetAdd} id={id} />
      ) : (
        <AddCardClose handleSetAdd={handleSetAdd} />
      )}
    </>
  );
};

export default AddCard;
