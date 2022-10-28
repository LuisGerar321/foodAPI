import path from "path";

require('dotenv').config();

export const env =  {
  db: {
    host : process.env.HOST || "localhost",
    database:  process.env.DATABASE || "postgres",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.USERNAME || "postgres",
    password: process.env.PASSWORD || "postgres"
  },
}