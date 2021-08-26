export default interface User {
  _id: string;
  email: string;
  password: string;
  signUpDate: Date;
  lastSignInDate: Date;
}

export interface UserSingUpDTO {
  email: string;
  password: string;
  signUpDate: Date;
  lastSignInDate: Date;
}

export interface UserSignInDTO {
  _id: string;
  lastSignInDate: Date;
}
