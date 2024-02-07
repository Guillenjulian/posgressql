import { Model, DataTypes } from "sequelize";

import { sequelize } from "./index";
export class Product extends Model {}
Product.init(
  {
    precio: DataTypes.INTEGER,
    title: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Product",
  }
);
