import { useFilterContext } from "../../services/context/filter-context";
import MyButton from "../MyButton/MyButton";
import { StyledPagination } from "./styles";

export default function Pagination() {
  const { page, setPage } = useFilterContext();
  const nextPage = () => {
    setPage((prePage) => prePage + 1);
  };
  const prevPage = () => {
    setPage((prePage) => (prePage - 1 <= 0 ? prePage : prePage - 1));
  };
  return (
    <StyledPagination>
      <MyButton handleClick={prevPage}>Prev</MyButton>
      <p>{page} - totalPage</p>
      <MyButton handleClick={nextPage}>Next</MyButton>
    </StyledPagination>
  );
}
