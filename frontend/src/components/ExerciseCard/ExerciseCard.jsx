import React, { useEffect, useState } from "react";
import { StyledExerciseCard } from "./styles";
import { getImage } from "../../services/exercise-service";

// const exercise = {
//   id: "21f0113f-2775-43f1-8cd6-21e6ae02f719",
//   code: "DUMBBELL_SHRUGS",
//   primaryMuscles: [
//     {
//       id: "11a71b4e-1c3a-484c-9776-68b2b6288821",
//       code: "TRAPEZIUS",
//       color: "#264653",
//       name: "Trapezius",
//     },
//   ],
//   secondaryMuscles: [],
//   types: [
//     {
//       id: "06604613-924a-407a-a7dd-a36c135a75bc",
//       code: "ISOLATION",
//       name: "Isolation",
//     },
//   ],
//   categories: [
//     {
//       id: "db98fca6-754e-4f6f-91d5-a0c13a26e297",
//       code: "FREE_WEIGHT",
//       name: "Free weight",
//     },
//   ],
//   name: "Dumbbell Shrugs",
//   description:
//     "Stand upright with a dumbbell in each hand, arms fully extended at your sides, and palms facing your body. Keep your chest lifted, shoulders pulled slightly back, and core engaged. Without bending your elbows, lift your shoulders straight up toward your ears as high as you can. Focus on contracting your trapezius muscles at the top of the movement. Pause briefly, then slowly lower your shoulders back down under control. Avoid rolling or rotating the shoulders — the motion should be vertical and controlled.",
// };
export default function ExerciseCard(props) {
  const [svgObj, setSvgObj] = useState(null);
  useEffect(() => {
    const fetchImage = async () => {
      const svg = await getImage(props.exercise.id);
      const test = `<svg ${(await svg.text()).split("<svg")[1]}`;
      setSvgObj(test);
    };

    fetchImage().catch(console.error);
  }, []);

  return (
    <StyledExerciseCard>
      <div className="image" dangerouslySetInnerHTML={{ __html: svgObj }} />
      <h4>{props.exercise.name}</h4>
      <p>
        {" "}
        Category: <strong>{props.exercise.categories[0].name}</strong>{" "}
      </p>
    </StyledExerciseCard>
  );
}
