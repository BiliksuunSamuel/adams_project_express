import { IAuth, IUser } from "./../interface";
import { Request, Response } from "express";
import { AddAuthInfo, GetAuthInfoByUserId } from "../services/AuthServices";
import { AddNewUser, GetUserByEmail } from "../services/UserServices";
import { HashPassword, VerifyPassword } from "../utils";

interface IInfo extends IUser {
  password: string;
}
export async function RegisterUserController(req: Request, res: Response) {
  try {
    const info: IInfo = req.body;
    const Info: any = await AddNewUser(info);
    const hpwd: any = await HashPassword(info.password);
    const auth: IAuth = {
      userId: Info?._id,
      password: hpwd,
    };
    await AddAuthInfo(auth);
    res.send(Info);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
}

interface IProps extends IUser {
  _id: string;
}

interface IAuthInfo extends IAuth {
  _id: string;
}
export async function LoginUserController(req: Request, res: Response) {
  try {
    const info: { password: string; email: string } = req.body;
    const Info = await GetUserByEmail<IProps | null>(info.email);
    if (Info) {
      const Auth = await GetAuthInfoByUserId<IAuthInfo | null>(Info._id);
      if (Auth) {
        const match = await VerifyPassword(info.password, Auth.password);
        if (match) {
          res.send(Info);
        } else {
          res.status(401).send("Incorrect Login Password");
        }
      } else {
        res.status(401).send("Invalid Email Address");
      }
    } else {
      res.status(401).send("Invalid Email Address");
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
