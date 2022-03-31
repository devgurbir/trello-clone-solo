import styled from "styled-components";

const StyledBoardBox = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#091e420a")};
  box-sizing: border-box;
  cursor: pointer;
  padding: 4px 8px;
  position: relative;
  width: 25%;
`;

export default StyledBoardBox;
