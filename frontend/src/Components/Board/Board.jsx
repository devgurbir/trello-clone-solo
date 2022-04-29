import StyledBoardLayout from "./Styled/StyledBoardLayout";
import React from "react";
import styles from "./board.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBoard } from "../../Redux/Board/actions";
import BoardLists from "./BoardLists";
import Loading from "../Loading"
const Board = () => {
  const dispatch = useDispatch();
  const { board_id } = useParams();
  const boardData = useSelector((state) => state.board.board);
  const boardIdFromCard = useSelector(state => state.singleCard?.card?.board)
  const isLoading = useSelector(state => state.board.isLoading)
  useEffect(() => {
    const finalBoardId = board_id || boardIdFromCard
    dispatch(getBoard(finalBoardId));
  }, []);
  
  return (
    <StyledBoardLayout bgColor={boardData.background}>
      {isLoading && <Loading /> }
      <nav className={styles.nav}></nav>
      <div className={styles.container}>
        <aside className={styles.aside}></aside>
        <main className={styles.main}>
          <div style={{ marginBottom: "1em" }}>
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
