import { LiList } from "../../styledComponents/styledComponents";

export default function FavItem({ exercise }) {
  <LiList key={exercise}>{exercise.name}</LiList>;
}
