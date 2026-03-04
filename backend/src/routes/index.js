const express = require("express");
var cors = require("cors");
var router = express.Router();
const { getAllWorkouts } = require("../services/workout-service.js");
/* GET home page. */
router.use(cors());

router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Hellow World");
});

router.post("/post", (req, res) => {
  res.send("Got a POST request");
});
router.put("/put", (req, res) => {
  res.send("Got a PUT request at /user");
});
router.delete("/user", (req, res) => {
  res.send("Got a DELETE request at user");
});

router.get("/workouts", async (req, res) => {
  try {
    let workoutsJSON = await getAllWorkouts();
    console.log("Ruta");

    res.send(workoutsJSON);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
