export interface IUser {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface IUserMSG {
  ok: boolean;
  msg: string;
}
