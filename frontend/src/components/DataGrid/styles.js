import styled from "@emotion/styled";
export const StyledDataGrid = styled.div`
  grid-area: main;
  background-color: ${(props) => {
    return props.color;
  }};

  ${(props) => {
    return props.rounded;
  }}
`;
