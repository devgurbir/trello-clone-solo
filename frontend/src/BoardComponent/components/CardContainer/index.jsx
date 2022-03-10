/** @format */
import styles from "../../styles/Index.module.css";
import { useSelector } from "react-redux";

import Column from "./Column";
import AddColumn from "./AddColumn";

const CardContainer = () => {
  const { boards } = useSelector((state) => state.boards);

  console.log(boards, "state");

  if (!boards?.length) return <div>Board Not Found</div>;
  return (
    <>
      <div className={styles.cardContainer}>
        {boards?.map(({ columns }, index) => (
          <Column key={index} columns={columns} />
        ))}
        {boards?.map((boards, index) => (
          <AddColumn key={index} boards={boards} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
