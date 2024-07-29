const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const ideia = db.define("ideia", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

ideia.belongsTo(User);
User.hasMany(ideia);

module.exports = ideia;
