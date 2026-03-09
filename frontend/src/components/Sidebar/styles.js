import styled from "@emotion/styled";
export const StyledSideBar = styled.div`
  grid-area: sidebar;
  text-align: center;
  background-color: white;
  height: 100%;
  ${(props) => {
    return props.rounded;
  }}
`;
