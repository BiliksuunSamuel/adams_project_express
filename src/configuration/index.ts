import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || process.env.port,
  dbURL: process.env.dbURL || "mongodb://localhost:27017/AdamsProjects",
};
