import styled from "@emotion/styled";
export const StyledExerciseCard = styled.div`
  display: flex;
  /* grid-template-columns: repeat); */
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  background-color: white;
  border-radius: 1rem;
  min-height: 250px;
  height: 100%;
  width: 100%;
  min-width: 300px;
  /* padding: 2rem; */
  background-color: lightsalmon;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  .image svg {
    width: 150px !important;
    height: 150px !important;
    object-position: center;
  }
`;
