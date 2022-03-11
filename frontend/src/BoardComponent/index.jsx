/** @format */

import styles from "./styles/Board.module.css";
import AppBar from "./components/AppBar/index";
import CardContainer from "./components/CardContainer";
function Board() {
  return (
    <div className={styles.boardContainer}>
      <AppBar />
      <CardContainer />
    </div>
  );
}

export default Board;
