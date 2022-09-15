import { GetRoutes, PostRoutes } from "./../routes/index";

import express from "express";
import {
  AddCheckController,
  GenerateTagIdController,
  GetChecksController,
} from "../controller/ChecksController";

const Router = express.Router();

Router.get(GetRoutes.GetChecks, GetChecksController);
Router.post(PostRoutes.GetCheckTag, GenerateTagIdController);
Router.post(PostRoutes.AddCheck, AddCheckController);

export default Router;
