const express = require("express");
var cors = require("cors");
var router = express.Router();
const {
  getAllWorkouts,
  getImageFromAPI,
} = require("../services/workout-service.js");
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
    console.log("index", response);

    res.send(response);
  } catch (error) {
    console.log("Ha habido un error", error);
  }
});

module.exports = router;
