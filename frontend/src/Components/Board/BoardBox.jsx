import React from "react";
import StyledBoardBox from "./Styled/StyledBoardBox";
import styles from "./board.module.css";
import { Link } from "react-router-dom";
const BoardBox = ({ id, background, title }) => {
  return (
    <StyledBoardBox bgColor={background}>
      <Link to={`/board/${id}`}>
        <div className={styles.boardBoxTile}>
          <span>{title}</span>
        </div>
      </Link>
    </StyledBoardBox>
  );
};

export default BoardBox;
