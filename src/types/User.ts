export default interface User {
  _id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSingInDTO {
  email: string;
  password: string;
}

export interface UserSignInDTO {
  email: string;
  password: string;
}
