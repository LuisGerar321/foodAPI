import { Sequelize } from "sequelize-typescript";
import { env } from "../env";
import path from "path";
import {Food} from "../models/Food"

const connection = new Sequelize({
  dialect: "postgres",
  host: env.db.host,
  username: env.db.username,
  password: env.db.password,
  database: env.db.database,
  models: [Food]
});

export default connection;