export default interface User {
  _id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SignUpDTO {
  email: string;
  password: string;
  salt: string;
}

export interface UserSignDTO {
  email: string;
  password: string;
}
