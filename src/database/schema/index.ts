import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  role: Number,
  status: Number,
});

export const AuthSchema = new mongoose.Schema({
  password: String,
  userId: String,
});

export const CheckSchema = new mongoose.Schema({
  userId: String,
  carNumber: String,
  driverName: String,
  dateCreated: String,
  status: Number,
  lodgeId: String,
  tagId: String,
  checkInTime: String,
  dateChecked: String,
  checkOutTime: String,
  note: String,
  phoneNumber: String,
});
