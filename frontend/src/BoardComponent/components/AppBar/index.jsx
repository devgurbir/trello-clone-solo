/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleInfo,
  faCoffee,
  faCog,
  faEllipsisH,
  faHouse,
  faLock,
  faMale,
  faPlus,
  faSearch,
  faStar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import "../AppBar/appbar.scss";
import styles from "../AppBar/appbar.module.css";

const AppBar = () => {
  const board_title = useSelector((state) => state.boards?.boards[0]?.title);
  console.log(board_title);
  return (
    <div className="app">
      <header className="app-header">
        <div className="left">
          <div className={styles.btn}>
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className={styles.btn}>
            <FontAwesomeIcon icon={faTrello} /> Boards
          </div>
          <div className={styles.btnSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className="center">
          <div className="logo">
            <FontAwesomeIcon icon={faTrello} /> Trello Clone
          </div>
        </div>
        <div className="right">
          <div className={styles.onlyBtn}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className={styles.onlyBtn}>
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
          <div className={styles.onlyBtn}>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className={styles.onlyBtn}>
            <FontAwesomeIcon icon={faCog} />
          </div>
          <div className={styles.onlyBtn}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
        </div>
      </header>

      <main className="app-board">
        <header className="board-header">
          <div className="left">
            <div className="title">
              <FontAwesomeIcon icon={faStar} />
              <span>{board_title}</span>
            </div>
            <div className={styles.onlyBtn}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.onlyBtn}>Personal</div>
            <div className={styles.btn}>
              <FontAwesomeIcon icon={faLock} /> Private
            </div>
          </div>
          <div className="right">
            <div className={styles.btn}>
              <FontAwesomeIcon icon={faMale} /> Butler
            </div>
            <div className={styles.btn}>
              <FontAwesomeIcon icon={faEllipsisH} /> Menu
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};
export default AppBar;
