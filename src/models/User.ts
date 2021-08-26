import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },

    password: String,

    salt: String,

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model<mongoose.Document>("User", UserModel);
