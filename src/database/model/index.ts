import mongoose from "mongoose";
import { AuthSchema, CheckSchema, UserSchema } from "../schema";

export const UserModel = mongoose.model("user", UserSchema);
export const AuthModel = mongoose.model("auth", AuthSchema);
export const CheckModel = mongoose.model("check", CheckSchema);
