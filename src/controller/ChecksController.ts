import { Request, Response } from "express";
import moment from "moment";
import { ICheckInfo } from "../interface";
import {
  AddCheck,
  GetChecks,
  UpdateCheckInfo,
} from "../services/CheckServices";
import { GenerateTagId } from "../utils";

interface IData extends ICheckInfo {
  _id: string;
}
export async function GetChecksController(req: Request, res: Response) {
  try {
    const data = await GetChecks<IData[]>();
    res.send({ data, message: null });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
}

export async function AddCheckController(req: Request, res: Response) {
  try {
    const info: ICheckInfo = req.body;
    info.dateCreated = moment().format();
    info.dateChecked = moment().format("DD/MM/YYYY");
    info.checkInTime = moment().format("h:m:s a");
    await AddCheck(info);
    const data = await GetChecks<IData[]>();
    res.send({ data, message: "Record Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
}

export async function GenerateTagIdController(req: Request, res: Response) {
  try {
    const data: { carNumber: string } = req.body;
    if (data.carNumber) {
      const otp = GenerateTagId(data.carNumber);
      res.send(otp);
    } else {
      res.status(401).send("Car Number Required");
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
}

export async function CheckOutController(req: Request, res: Response) {
  try {
    const data: IData = req.body;
    data.checkOutTime = moment().format();
    await UpdateCheckInfo(data, data._id);
    res.send({
      data: await GetChecks(),
      message: "Service Updated Successfully",
    });
  } catch (error) {
    res.status(404).send(error);
  }
}
