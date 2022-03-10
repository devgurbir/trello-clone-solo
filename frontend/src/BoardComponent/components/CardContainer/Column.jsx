/** @format */
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../../styles/Column.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import ModalRemoveColumn from "./ModalRemove";
import TitleFormHandle from "./TitleFormHandler";
import AddCardTitleField from "./AddCardTitleField";
import { removeColumn } from "../../../Api";

const Column = (props) => {
  const [column, setColumn] = useState(props.columns);
  const [dragingItem, setDragingitem] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [columnvalue, setColumnvalue] = useState();

  const dragItem = useRef();
  const dragNode = useRef();

  useEffect(() => {
    setColumn(props.columns);
  }, [props.columns]);

  const getStyles = (params) => {
    const reItem = styles.reItemList;
    const currentItem = dragItem.current;
    const basic = styles.itemList;
    if (
      currentItem.itemIndex === params.itemIndex &&
      currentItem.grpIndex === params.grpIndex
    ) {
      return reItem;
    } else {
      return basic;
    }
  };

  const handleDragEnd = () => {
    // console.log("drag ending .. ");
    setDragingitem(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };
  const handleDragListStart = (e, params) => {
    console.log("handleDragListStart ..", params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragingitem(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    console.log("handle Enter drag ...");
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setColumn((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));

        newList[params.grpIndex].row.splice(
          params.itemIndex,
          0,
          newList[currentItem.grpIndex].row.splice(currentItem.itemIndex, 1)[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
  };

  const toggleShowConfirmModal = (index) => {
    setColumnvalue(index);
    setShowConfirmModal(!showConfirmModal);
  };

  const onConfirmModalAction = async (type) => {
    if (type === "confirm") {
      await removeColumn(column[columnvalue]._id);
      delete column[columnvalue];
      setShowConfirmModal(false);
    } else {
      setShowConfirmModal(false);
    }
  };

  return (
    <>
      {column?.map(({ title, row }, grpIndex) => (
        <div
          draggable
          onDragEnter={
            dragingItem && !row.length
              ? (e) => handleDragEnter(e, { itemIndex: 0, grpIndex })
              : null
          }
          className={styles.column}
          key={grpIndex}
        >
          <header className={styles.header}>
            <div className={styles.headerText}>
              <TitleFormHandle title={title} col={column[grpIndex]} />
            </div>
            <div className={styles.headerDropDown}>
              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  className={styles.dropdownToggle}
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => toggleShowConfirmModal(grpIndex)}
                  >
                    Remove Column
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </header>
          <ul className={styles.ul}>
            {row?.map((card, itemIndex) => (
              <li
                draggable
                onDragStart={(e) =>
                  handleDragListStart(e, {
                    grpIndex,
                    itemIndex,
                  })
                }
                onDragEnter={
                  dragingItem
                    ? (e) => handleDragEnter(e, { grpIndex, itemIndex })
                    : null
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
          <div>
            <AddCardTitleField row={row} column={column} grpIndex={grpIndex} />
          </div>
        </div>
      ))}
      <ModalRemoveColumn
        show={showConfirmModal}
        onAction={onConfirmModalAction}
        title="remove column"
        content={`Are you sure you want to remove?`}
      />
    </>
  );
};

export default Column;
