const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:8081",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const db = require("./app/config/db.config.js");

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

require("./routes/guitar.route")(app);

// Create a Server
const server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
