import config from "./config";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/reportesdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then((db) => console.log(`DB is connected`))
      .catch((err) => console.log(err));
