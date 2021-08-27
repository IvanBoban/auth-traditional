import { Service, Inject } from "typedi";

import User, { SignUpDTO, UserSignDTO } from "../types/User";

@Service()
export default class AuthService {
  constructor(@Inject("userModel") private userModel: Models.UserModel) {}
}
