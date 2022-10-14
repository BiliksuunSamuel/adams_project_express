import { GetRoutes, PostRoutes, PutRoutes } from "./../routes/index";

import express from "express";
import {
  AddCheckController,
  CheckOutController,
  GenerateTagIdController,
  GetChecksController,
} from "../controller/ChecksController";

const Router = express.Router();

Router.get(GetRoutes.GetChecks, GetChecksController);
Router.post(PostRoutes.GetCheckTag, GenerateTagIdController);
Router.post(PostRoutes.AddCheck, AddCheckController);

//
Router.put(PutRoutes.CheckOut, CheckOutController);

export default Router;
