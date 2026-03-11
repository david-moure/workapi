const express = require("express");
const db = require("../../database/Database.js");
var cors = require("cors");
var router = express.Router();
const {
  getAllWorkouts,
  getImageFromAPI,
  getPageFromAPI,
  getWorkoutsByMuscle,
  getMuscleList,
} = require("../services/workout-service.js");
const {
  saveWorkout,
  getSavedWorkouts,
  deleteWorkoutById,
} = require("../services/database-controller.js");
const {
  getImage,
} = require("../../../frontend/src/services/exercise-service.js");
/* GET home page. */
router.use(cors());

router.post("/post", (req, res) => {
  res.send("Got a POST request");
});
router.get("/", async (req, res) => {
  try {
    let workoutsJSON = await getAllWorkouts();
    res.send(workoutsJSON);
  } catch (error) {
    console.log(error);
  }
});
router.get("/image/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getImageFromAPI(id);

    res.send(response);
  } catch (error) {
    console.log("Ha habido un error", error);
  }
});
router.get("/page/:page", async (req, res) => {
  const { page } = req.params;
  res.send(getPageFromAPI(page));
});

router.get("/workoutsByMuscle/:muscleId", async (req, res) => {
  const { muscleId } = req.params;
  res.send(getWorkoutsByMuscle(muscleId));
});
router.post("/save", (req, res) => {
  const response = saveWorkout(req.body);
  if (response) {
    res.send({ Response: "Save succesfully" });
  } else {
    res.send({ Response: "Already exists" });
  }
});
router.get("/savedWorkouts", (req, res) => {
  // res.send("got it");
  const workouts = getSavedWorkouts();
  res.json(workouts);
});

router.get("/muscleList", (req, res) => {
  const muscles = getMuscleList();
  res.json(muscles);
});

router.post("/delete", (req, res) => {
  const response = deleteWorkoutById(req.body.id);
  res.send(response);
});
module.exports = router;
