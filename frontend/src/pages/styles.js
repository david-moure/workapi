import styled from "@emotion/styled";
export const StyledDashBoard = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-areas:
    ". header pagination"
    "sidebar main  favourite"
    "sidebar main favourite";
  gap: 1rem;
`;
