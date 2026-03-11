import { StyledInputLabel } from "./styles";

export default function InputLabel(props) {
  const muscle = props.muscle;
  const filter = props.filter;

  const handleChange = props.handleChange;
  return (
    <StyledInputLabel>
      <input
        id={muscle.id}
        type="checkbox"
        onChange={handleChange}
        name={muscle.name}
        value={muscle.id}
        checked={filter === muscle.id}
      />
      <label htmlFor={muscle.id}>{muscle.name}</label>
    </StyledInputLabel>
  );
}
