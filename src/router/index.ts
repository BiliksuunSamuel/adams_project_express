import { GetRoutes } from "./../routes";
import express, { Request, Response } from "express";

const Router = express.Router();

Router.get(GetRoutes.root, (req: Request, res: Response) => {
  try {
    res.send({
      Developer: {
        name: "Biliksuun Samuel",
        email: "biliksuunsamuel@gmail.com",
        git: "BiliksuunSamuel",
      },
      About: "Automated Packing Lodge API",
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

export { default as UserRouter } from "./UserRouter";
export { default as CheckRouter } from "./CheckRouter";
export default Router;
