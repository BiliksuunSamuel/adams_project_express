import { MongooseError } from "mongoose";
import { UserModel } from "../database/model";
import { IUser } from "../interface";

export function GetUserByEmail<T>(email: string) {
  return new Promise<T>(function (resolve, reject) {
    try {
      UserModel.findOne({ email }, (error: MongooseError, results: T) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function GetUserById<T>(id: string) {
  return new Promise<T>(function (resolve, reject) {
    try {
      UserModel.findOne({ _id: id }, (error: MongooseError, results: T) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddNewUser(info: IUser) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new UserModel(info);
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
