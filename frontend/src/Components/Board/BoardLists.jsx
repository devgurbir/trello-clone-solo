import React from "react";
import { useSelector } from "react-redux";
import AddList from "../List/AddList";
import List from "../List/List";
import styles from "./board.module.css";

const BoardLists = () => {
  const lists = useSelector((state) => state.board.lists);
  return (
    <div className={styles.boardLists}>
      {lists?.map((list) => (
        <List
          key={list._id}
          id={list._id}
          cards={list.cards}
          title={list.title}
        />
      ))}
      <AddList />
    </div>
  );
};

export default BoardLists;
