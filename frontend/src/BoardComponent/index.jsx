/** @format */

import styles from "./styles/Board.module.css";
import AppBar from "./components/AppBar/index";
import BoardBar from "./components/BoardBar";
import CardContainer from "./components/CardContainer";
function Board() {
  return (
    <div className={styles.boardContainer}>
      <AppBar />
      <BoardBar />
      <CardContainer />
    </div>
  );
}

export default Board;
