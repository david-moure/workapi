const { getAll, getImage } = require("../clients/conexion.js");

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
module.exports = { getAllWorkouts, getImageFromAPI };
