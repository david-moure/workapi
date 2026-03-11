const db = require("../../database/Database.js");

function saveWorkout({ workoutId, name, category, primary_muscle }) {
  console.log("id", workoutId);
  console.log("name", name);
  console.log("category", category);
  console.log("primario", primary_muscle);
  const workout = workoutById(workoutId);
  if (workout) {
    return false;
  }
  const insert = db.prepare(
    "INSERT INTO Workouts(workout_id,name,category,primary_muscle) VALUES(?,?,?,?)",
  );
  insert.run(workoutId, name, category, primary_muscle);
  return true;
}

function workoutById(workoutId) {
  const select = db.prepare("SELECT * FROM Workouts WHERE workout_id=?");
  const workout = select.get(workoutId);
  return workout;
}

function getSavedWorkouts() {
  const select = db.prepare("SELECT * FROM Workouts");
  const workouts = select.all();
  return workouts;
}
function deleteWorkoutById(workoutId) {
  console.log("workoutId", workoutId);
  const query = db.prepare("DELETE FROM Workouts WHERE workout_id=?");
  query.run(workoutId);
}
module.exports = { saveWorkout, getSavedWorkouts, deleteWorkoutById };
