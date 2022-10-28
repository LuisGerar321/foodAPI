import express from "express";
import {env} from "./env"
import connection from "./database/dbConnection"
import {foodRouter} from "./routes/food";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 3000;




async function main() {
  try {
    const jsonParser = bodyParser.json();
    const urlEncodedParser = bodyParser.urlencoded({extended: false});

    app.use(jsonParser);
    app.use(jsonParser);
    app.use("/", foodRouter);
    await connection.sync()
    console.log("connection db sucessfully");
    app.listen(PORT, () => {
      console.log(`API is listening on PORT ${PORT}`);
    })
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
main();