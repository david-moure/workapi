import { StyledMyButton } from "./styles";

export default function MyButton({ handleClick, children }) {
  return <StyledMyButton onClick={handleClick}>{children}</StyledMyButton>;
}
