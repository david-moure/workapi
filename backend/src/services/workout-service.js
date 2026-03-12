const {
  getAll,
  getImage,
  getPage,
  getAllMuscles,
  getworkoutByMusclePage,
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
async function getPageFromAPI(page) {
  const workouts = await getPage(page);
  return workouts;
}

async function getMuscleList() {
  const muscles = await getAllMuscles();
  return muscles;
}
async function getWorkoutsByMuscle(id, page = 1) {
  console.log("Dentro del servicio:");
  console.log("Servicio-ID:", id);
  console.log("Servicio-PAGE:", page);
  if (id) {
    console.log("Enviado por donde existe el ID, a: getworkoutByMusclePage");
    const workouts = await getworkoutByMusclePage(id, page);
    return workouts;
  } else {
    console.log("Enviado por donde NO existe el ID, a: getPage");

    const workouts = await getPage(page);
    return workouts;
  }
}
module.exports = {
  getAllWorkouts,
  getImageFromAPI,
  getPageFromAPI,
  getWorkoutsByMuscle,
  getMuscleList,
};
