import { Sequelize } from "sequelize";
import { defineWeddingModel } from "./models/WeddingModel.js";
import { defineWhiteListModel } from "./models/WhiteListModel.js";
import { databaseUrl } from "./config/config.js";

if (!databaseUrl) {
  throw new Error("Database URL is not defined. Check your configuration.");
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
  define: {
    timestamps: true,
  },
});

const models = {
  Wedding: defineWeddingModel(sequelize),
  WhiteList: defineWhiteListModel(sequelize),
};

export default { models, sequelize };
