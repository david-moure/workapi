import React, { useCallback, useEffect, useState } from "react";
import { StyledExerciseCard } from "./styles";
import {
  deleteWorkout,
  getImage,
  saveWorkout,
} from "../../services/exercise-service";
import MyButton from "../MyButton/MyButton";
import { useFavExerciseContext } from "../../services/context/fav-exercise-context";

export default function ExerciseCard(props) {
  /* Estado para almacenar el svg */
  const [svgObj, setSvgObj] = useState(null);
  /* Contexto donde se guardan los ejercicios Favoritos */
  const { exercisesFav, setExercisesFav } = useFavExerciseContext();

  const checkIsFavourite = useCallback(() => {
    exercisesFav.some((exercise) => exercise.workout_id === props.exercise.id);
  }, []);

  useEffect(() => {
    /* Busca la imagen del backend cuando se carga el componente*/
    const fetchImage = async () => {
      const svg = await getImage(props.exercise.id);
      const test = `<svg ${(await svg.text()).split("<svg")[1]}`;
      setSvgObj(test);
    };

    fetchImage().catch(console.error);
  }, []);

  const addToFavourites = () => {
    saveWorkout(
      props.exercise.id,
      props.exercise.name,
      props.exercise.categories[0].name,
      props.exercise.primaryMuscles[0].name,
    );
    setExercisesFav((prevFav) => {
      const favWorkout = prevFav.find(
        (fav) => fav.workout_id === props.exercise.id,
      );
      if (!favWorkout) {
        return [
          ...prevFav,
          {
            workout_id: props.exercise.id,
            name: props.exercise.name,
            category: props.exercise.categories[0].name,
            primary_muscle: props.exercise.primaryMuscles[0].name,
          },
        ];
      }
      return [...prevFav];
    });
  };
  const removeFromFavourites = () => {
    setExercisesFav((prevFavs) => {
      return prevFavs.filter(
        (prevFav) => prevFav.workout_id !== props.exercise.id,
      );
    });
    deleteWorkout(props.exercise.id);
    // setIsFavourite(false);
  };

  return (
    <StyledExerciseCard>
      <div className="image" dangerouslySetInnerHTML={{ __html: svgObj }} />
      <h4>{props.exercise.name}</h4>
      <p>
        Category: <strong>{props.exercise.categories[0].name}</strong>
      </p>
      {exercisesFav.some(
        (exercise) => exercise.workout_id === props.exercise.id,
      ) ? (
        <MyButton handleClick={removeFromFavourites}>
          ❌ Remove from Favourites
        </MyButton>
      ) : (
        <MyButton handleClick={addToFavourites}>❤️ Add to Favourites</MyButton>
      )}
    </StyledExerciseCard>
  );
}
