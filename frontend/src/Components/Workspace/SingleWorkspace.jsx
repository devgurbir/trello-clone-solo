import React from "react";
import styles from "./workspace.module.css";
import CreateBoardBox from "./CreateBoardBox";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getBearerToken from "../../Utils/GetBearerToken";
import { useDispatch } from "react-redux";
import { getWorkspace } from "../../Redux/Workspace/actions";
import { useSelector } from "react-redux";
import BoardBox from "../Board/BoardBox";
import { Link } from "react-router-dom";

const SingleWorkspace = () => {
  const { workspace_id } = useParams();
  const token = getBearerToken();
  const dispatch = useDispatch();
  const workspace = useSelector((state) => state.workspace.workspace);

  useEffect(() => {
    dispatch(getWorkspace(workspace_id, token));
  }, []);
  return (
    <div>
      {/* Workspace Title */}
      <div className={styles.header}>
        <h1>{workspace.title}</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h2>Boards</h2>
          <div className={styles.boardsList}>
            <CreateBoardBox />
            {workspace?.boards?.map((board) => (
              <BoardBox
                key={board._id}
                id={board._id}
                background={board.background}
                title={board.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkspace;
