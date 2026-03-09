import styled from "@emotion/styled";
export const StyledExerciseCard = styled.div`
  display: flex;
  /* grid-template-columns: repeat); */
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  background-color: white;
  border-radius: 1rem;
  min-height: 300px;
  height: 100%;
  width: 50%;
  min-width: 400px;
  padding: 2rem;
  .image svg {
    width: 200px !important;
    height: 200px !important;
    object-position: center;
  }
`;
