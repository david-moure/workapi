import styled from "@emotion/styled";
export const StyledDataGrid = styled.div`
  grid-area: main;
  /* background-color: ${(props) => {
    return props.color;
  }}; */
  background-color: transparent;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 1rem;

  /* ${(props) => {
    return props.rounded;
  }}; */
`;
