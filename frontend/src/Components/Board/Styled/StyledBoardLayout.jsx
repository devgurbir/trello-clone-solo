import styled from "styled-components";

const StyledBoardLayout = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#FAF9F9")};
  height: 100vh;
`;

export default StyledBoardLayout;
