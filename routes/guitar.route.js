module.exports = function (app) {
  const guitars = require("../controllers/guitar.controller");

  // Create a new guitar
  app.post("api/guitars/create", guitars.create);

  // Retrieve all guitars
  app.get("/api/guitars", guitars.findAll);

  // Retrieve a single guitar with guitarId
  app.get("/api/guitars/:guitarId", guitars.findById);

  // Update a guitar with guitarId
  app.put("/api/guitars/guitarId", guitars.update);

  // Delete a guitar with guitarId
  app.delete("/api/guitars/:guitarId", guitars.delete);
};
