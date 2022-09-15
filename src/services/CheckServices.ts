import { MongooseError } from "mongoose";
import { CheckModel } from "../database/model";
import { ICheckInfo } from "../interface";

export function GetChecks<T>() {
  return new Promise<T>(function (resolve, reject) {
    try {
      CheckModel.find((error: MongooseError, results: T) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddCheck(info: ICheckInfo) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new CheckModel(info);
      Info.validate()
        .then(() => {
          Info.save();
          resolve(Info);
        })
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
}

export function GetCheckByTagId<T>(id: string) {
  return new Promise<T>(function (resolve, reject) {
    try {
      CheckModel.findOne({ tagId: id }, (error: MongooseError, results: T) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdateCheckInfo(info: ICheckInfo, id: string) {
  return new Promise(function (resolve, reject) {
    try {
      CheckModel.updateOne({ _id: id }, { ...info }, (error: MongooseError) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}
