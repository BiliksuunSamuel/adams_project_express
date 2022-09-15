import express from "express";
import cors from "cors";
import "../database";
import Router, { CheckRouter, UserRouter } from "../router";
//
const app = express();

//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

//
app.use(Router);
app.use(UserRouter);
app.use(CheckRouter);

export default app;
