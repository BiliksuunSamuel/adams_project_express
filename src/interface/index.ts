export interface IUser {
  username: string;
  email: string;
  role: number;
  status: number;
}

export interface IAuth {
  password: string;
  userId: string;
}

export interface ICheckInfo {
  driverName: string;
  carNumber: string;
  dateCreated: string;
  dateChecked: string;
  checkInTime: string;
  checkOutTime: string;
  lodgeId: string;
  tagId: string;
  userId: string;
  status: number;
  note: string;
  phoneNumber: string;
}
