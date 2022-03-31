import React from "react";
import styles from "./board.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import getBearerToken from "../../Utils/GetBearerToken";
import { createBoard } from "../../Redux/Workspace/actions";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const CreateBoardPopup = ({ handleShowPopup }) => {
  const [boardColors, setBoardColors] = useState([
    { color: "#0079bf", selected: false },
    { color: "#d29034", selected: false },
    { color: "#519839", selected: false },
    { color: "#b04632", selected: false },
    { color: "#89609e", selected: false },
  ]);

  const selectedColor = boardColors.filter((el) => el.selected == true);

  const handleColorSelect = (el) => {
    const newBoardColors = boardColors.map((item) =>
      item.color == el.color
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );
    setBoardColors(newBoardColors);
  };

  const [boardTitle, setBoardTitle] = useState("");
  const { workspace_id } = useParams();
  const token = getBearerToken();
  const dispatch = useDispatch();

  return (
    <div className={styles.popUp}>
      <div className={styles.popupHeaderTitle}>
        <span style={{ textAlign: "center" }}>Create Board</span>
        <CloseOutlinedIcon
          onClick={() => handleShowPopup(false)}
          className={styles.popUpHeaderClose}
          fontSize="small"
          sx={{ color: "#6b778c", textAlign: "right" }}
        />
      </div>
      <div
        className={styles.skeleton}
        style={{ backgroundColor: selectedColor[0]?.color || "grey" }}
      >
        {/* Board Skeleton */}
        <img src="/board-preview-skeleton.svg" alt="board-skeleton" />
      </div>

      <div>
        {/* Color options */}
        <h4 className={styles.label}>Background</h4>
        <div className={styles.colorBoxesDiv}>
          {boardColors?.map((el) => (
            <button
              onClick={() => handleColorSelect(el)}
              style={{ backgroundColor: el.color }}
              className={styles.colorBoxes}
            >
              {el.selected && (
                <DoneIcon
                  sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      <div>
        {/* Board title + input */}
        <h4 className={styles.label}>
          Board Title<span className={styles.required}>*</span>
        </h4>
        <input
          className={styles.boardTitle}
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        />
      </div>
      <div className={styles.boardTitleReqired}>
        {/* Board title is required */}
        <span class="waveIcon">👋</span>
        <p>Board title is required</p>
      </div>
      <div>
        {/* Create button */}
        {boardTitle.length > 0 ? (
          <button
            onClick={() =>
              dispatch(
                createBoard(
                  boardTitle,
                  workspace_id,
                  selectedColor[0]?.color || "grey",
                  token
                )
              )
            }
            className={styles.createButton}
          >
            Create
          </button>
        ) : (
          <button disabled className={styles.createButton}>
            Create
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateBoardPopup;
