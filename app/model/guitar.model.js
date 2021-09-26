export default (sequelize, Sequelize) => {
  const Guitar = sequelize.define("guitar", {
    brand: {
      type: Sequelize.STRING,
    },
    model: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.STRING,
    },
  });

  return Guitar;
};

/**
 * TODO:
 * Model for models of guitar, and brands
 * How to upload images to the server and store them in the database
 * for load them on the front end
 ***/
