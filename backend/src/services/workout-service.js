const { getAll } = require("../clients/conexion.js");

async function getAllWorkouts() {
  console.log("servicio");
  try {
    let workouts = await getAll();
    return workouts;
  } catch (error) {
    console.error(error);
  }
}
module.exports = { getAllWorkouts };
