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

db.User = require('./user')(sequelize,DataTypes)
db.Contact = require('./contact')(sequelize,DataTypes)

db.sequelize.sync({alter:true})

db.User.hasMany(db.Contact,{
})
db.Contact.belongsTo(db.User)

module.exports = db;
