import StyledBoardLayout from "./Styled/StyledBoardLayout";
import React from "react";
import styles from "./board.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBoard } from "../../Redux/Board/actions";
import BoardLists from "./BoardLists";

const Board = () => {
  const dispatch = useDispatch();
  const { board_id } = useParams();
  const boardData = useSelector((state) => state.board.board);
  useEffect(() => {
    console.log(board_id);
    dispatch(getBoard(board_id));
  }, []);
  return (
    <StyledBoardLayout>
      <nav className={styles.nav}></nav>
      <div className={styles.container}>
        <aside className={styles.aside}></aside>
        <main className={styles.main}>
          <div>
            <h2>{boardData.title}</h2>
          </div>
          {/* Lists */}
          <BoardLists />
        </main>
      </div>
    </StyledBoardLayout>
  );
};

export default Board;
