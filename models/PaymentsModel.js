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
  },
  {
    freezeTableName: true,
  }
);

export default Payments;
