import styled from "@emotion/styled";
export const StyledSideBar = styled.div`
  grid-area: sidebar;
  text-align: center;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ${(props) => {
    return props.rounded;
  }};
  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    padding-left: 1rem;
  }
`;
