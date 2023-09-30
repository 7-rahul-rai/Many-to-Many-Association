const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("expressdb", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (err) {
  console.log(err);
}

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Actor = require('./Actor')(sequelize,DataTypes)
db.Movie = require('./Movie')(sequelize,DataTypes)

db.sequelize.sync({force:false})


db.Movie.belongsToMany(db.Actor, { through: 'ActorMovies' });
db.Actor.belongsToMany(db.Movie, { through: 'ActorMovies' });
module.exports = db;
