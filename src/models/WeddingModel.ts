import { DataTypes, Sequelize } from "sequelize";

export function defineWeddingModel(sequelize: Sequelize) {
  return sequelize.define("Wedding", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}

export default defineWeddingModel;
