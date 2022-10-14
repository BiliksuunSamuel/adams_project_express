import mongoose from "mongoose";
import configuration from "../configuration";

const connection = mongoose.connect(configuration.dbURL, (error) => {
  if (error) {
    throw error;
  }
  console.log("Database Connected");
});

export default connection;
