import { PostRoutes } from "./../routes/";
import express from "express";
import {
  LoginUserController,
  RegisterUserController,
} from "../controller/UserController";

const Router = express.Router();

Router.post(PostRoutes.UserRegister, RegisterUserController);
Router.post(PostRoutes.UserLogin, LoginUserController);

export default Router;
