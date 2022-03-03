/** @format */
import styles from "../../styles/CardContainer.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRef } from "react";

const CardContainer = () => {
  const { boards } = useSelector((state) => state.boards);
  console.log(boards);
  const [column, setColumn] = useState();
  const [dragingItem, setDragingitem] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  useEffect(() => {
    let isCanceled = false;
    const data = boards.find((board) => board.id === "board-1");
    if (data && !isCanceled) {
      setColumn(data.columns);
    }
    return () => {
      isCanceled = true;
    };
  }, []);

  const handleDragListStart = (e, params) => {
    console.log("handleDragListStart ..", params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragingitem(true);
    }, 0);
  };

  const handleDragEnd = () => {
    console.log("drag ending .. ");
    setDragingitem(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const handleDragEnter = (e, params) => {
    console.log("handle Enter drag ...");
    if (e.target !== dragNode.current) {
      setColumn((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        console.log("kk,", newList);
      });
    }
  };

  const getStyles = (params) => {
    const reItem = styles.reItemList;
    const currentItem = dragItem.current;
    const basic = styles.itemList;
    if (
      currentItem.itemIndex === params.itemIndex &&
      currentItem.grpIndex === params.grpIndex
    ) {
      return reItem;
    }
    return basic;
  };

  if (!column) return <div>Board Not Found</div>;
  return (
    <>
      <div className={styles.cardContainer}>
        {column.map(({ title, cards }, grpIndex) => (
          <div draggable className={styles.column} key={grpIndex}>
            <header className={styles.header}>{title}</header>
            <ul className={styles.ul}>
              {cards.map((card, itemIndex) => (
                <li
                  draggable
                  onDragStart={(e) =>
                    handleDragListStart(e, {
                      grpIndex,
                      itemIndex,
                    })
                  }
                  className={
                    dragingItem
                      ? getStyles({ grpIndex, itemIndex })
                      : styles.itemList
                  }
                  key={itemIndex}
                >
                  {card.cover && <img src={card.cover} alt="logo" />}
                  {card.title}
                </li>
              ))}
            </ul>
            <footer className={styles.footer}>Add another</footer>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardContainer;
