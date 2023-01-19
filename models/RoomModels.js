import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Rooms = db.define(
  "rooms",
  {
    room_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hotel_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rental_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_available: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

db.sync()
  .then(() => {
    console.log("Rooms table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Rooms;
