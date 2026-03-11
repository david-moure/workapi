const {
  getAll,
  getImage,
  getPage,
  getWorkoutsByMuscleFromAllWorkouts,
  getAllMuscles,
} = require("../clients/conexion.js");

async function getAllWorkouts() {
  try {
    const workouts = await getAll();
    return workouts;
  } catch (error) {
    console.error(error);
  }
}
async function getImageFromAPI(id) {
  try {
    const buffer = await getImage(id);
    return buffer;
  } catch (error) {
    console.error(error);
  }
}
function getPageFromAPI(page) {
  const workouts = getPage(page);
  return workouts;
}

function getWorkoutsByMuscle(muscleId) {
  const workouts = getWorkoutsByMuscleFromAllWorkouts(muscleId);
  return workouts;
}
function getMuscleList() {
  const muscles = getAllMuscles();
  return muscles;
}

module.exports = {
  getAllWorkouts,
  getImageFromAPI,
  getPageFromAPI,
  getWorkoutsByMuscle,
  getMuscleList,
};
