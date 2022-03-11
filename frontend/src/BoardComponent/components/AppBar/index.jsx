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

import "../AppBar/appbar.scss";
const AppBar = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="left">
          <div className="btn">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="btn btn-text">
            <FontAwesomeIcon icon={faTrello} /> Boards
          </div>
          <div className="btn search">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className="center">
          <div className="logo">
            <FontAwesomeIcon icon={faTrello} /> Trello Clone
          </div>
        </div>
        <div className="right">
          <div className="btn">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="btn">
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
          <div className="btn">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="btn">
            <FontAwesomeIcon icon={faCog} />
          </div>
          <div className="btn">
            <FontAwesomeIcon icon={faUserTie} />
          </div>
        </div>
      </header>

      <main className="app-board">
        <header className="board-header">
          <div className="left">
            <div className="title">
              <FontAwesomeIcon icon={faCoffee} />
              <span> MERN STACK</span>
            </div>
            <div className="btn">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="btn">Personal</div>
            <div className="btn btn-text">
              <FontAwesomeIcon icon={faLock} /> Private
            </div>
          </div>
          <div className="right">
            <div className="btn btn-text">
              <FontAwesomeIcon icon={faMale} /> Butler
            </div>
            <div className="btn btn-text">
              <FontAwesomeIcon icon={faEllipsisH} /> Menu
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};
export default AppBar;
