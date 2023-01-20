import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Rents = db.define(
  "rents",
  {
    date_start: {
      type: DataTypes.DATE,
    },
    date_end: {
      type: DataTypes.DATE,
    },
    bank: {
      type: DataTypes.STRING,
    },
    total_rent_price: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // 'users' refers to table name
        key: "id", // 'id' refers to column name in users table
      },
    },
    room_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "rooms", // 'users' refers to table name
        key: "id", // 'id' refers to column name in users table
      },
    },
  },
  {
    freezeTableName: true,
  }
);

db.sync({ alter: true })
  .then(() => {
    console.log("Rents table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Rents;
