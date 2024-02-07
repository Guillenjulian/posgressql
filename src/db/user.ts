import { Model, DataTypes } from "sequelize";

import { sequelize } from "./index";
export class User extends Model {}
User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    lastname: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
  }
);
