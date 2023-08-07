export interface IUser {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface IUserSave {
  ok: boolean;
  msg: string;
}
