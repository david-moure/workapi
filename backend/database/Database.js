const Database = require("better-sqlite3");

const db = new Database("Workouts.db");

db.exec(
  `DROP TABLE IF EXISTS Workouts;
  	CREATE TABLE Workouts (
	workout_id text PRIMARY KEY,
	name TEXT NOT NULL,
	category TEXT NOT NULL,
	primary_muscle TEXT NOT NULL
	
)`,
);
module.exports = db;
