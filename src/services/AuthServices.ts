import { MongooseError } from "mongoose";
import { IAuth } from "../interface";
import { AuthModel } from "./../database/model/index";

export function GetAuthInfoByUserId<T>(id: string) {
  return new Promise<T>(function (resolve, reject) {
    try {
      AuthModel.findOne({ userId: id }, (error: MongooseError, results: T) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddAuthInfo(info: IAuth) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new AuthModel(info);
      Info.validate()
        .then(() => {
          Info.save();
          resolve(Info);
        })
        .catch((error: any) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
}

export function ChangeAuthPassword(info: IAuth) {
  return new Promise(function (resolve, reject) {
    try {
      AuthModel.updateOne(
        { userId: info.userId },
        { password: info.password },
        (error: any) => {
          error && reject(error);
          resolve(true);
        }
      );
    } catch (error: any) {
      reject(error);
    }
  });
}
