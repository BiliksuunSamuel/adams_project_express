import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || process.env.port,
  dbURL:
    process.env.dbURL ||
    "mongodb+srv://samuelbills:77045109@cluster0.nakki.mongodb.net/AdamsProject",
};
