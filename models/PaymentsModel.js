import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Payments = db.define(
  "payments",
  {
    transaction_id: {
      type: DataTypes.STRING,
    },
    order_id: {
      type: DataTypes.STRING,
    },
    payment_type: {
      type: DataTypes.STRING,
    },
    bank_transfer: {
      type: DataTypes.STRING,
    },
    gross_amount: {
      type: DataTypes.INTEGER,
    },
    va_number: {
      type: DataTypes.INTEGER,
    },
    transaction_status: {
      type: DataTypes.BOOLEAN,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // 'users' refers to table name
        key: "id", // 'id' refers to column name in users table
      },
    },
    rent_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "rents", // 'users' refers to table name
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
    console.log("Payments table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Payments;
