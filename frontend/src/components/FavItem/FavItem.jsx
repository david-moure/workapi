import { LiList } from "../../styledComponents/styledComponents";

export default function FavItem({ exercise }) {
  return <LiList key={exercise}>{exercise.name}</LiList>;
}
