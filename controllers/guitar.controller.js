const db = require("../app/config/db.config");
const Guitars = db.guitars;

// Post a Guitar
exports.create = (req, res) => {
  // Save Guitar to PostgreSQL database
  Guitars.create({
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    type: req.body.type,
  })
    .then((guitar) => {
      // Send created guitar to client
      res.send(guitar);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// FETCH all Guitars
exports.findAll = (req, res) => {
  Guitars.findAll()
    .then((guitars) => {
      //Send all Guitars to Client
      res.send(guitars);
    })
    .catch((err) => {
      res.status(500).send("Error ->" + err);
    });
};

// FIND a Guitar by ID

exports.findById = (req, res) => {
  Guitars.findById(req.params.guitarId)
    .then((guitar) => {
      res.send(guitar);
    })
    .catch((err) => {
      res.status(500).send("Error ->" + err);
    });
};

// Update a Guitar
exports.update = (req, res) => {
  let guitar = req.body;
  const id = req.params.guitarId;
  Guitars.update(
    {
      brand: req.body.brand,
      model: req.body.model,
      year: req.body.year,
      type: req.body.type,
    },
    {
      where: {
        id: req.params.guitarId,
      },
    }
  )
    .then(() => {
      res.status(200).send(guitar);
    })
    .catch((err) => {
      res.status(500).send("Error ->" + err);
    });
};

// Delete a Guitar by ID
exports.delete = (req, res) => {
  const id = req.params.guitarId;
  Guitars.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.status(200).send("Guitar Deleted");
    })
    .catch((err) => {
      res.status(500).send("Error ->" + err);
    });
};
