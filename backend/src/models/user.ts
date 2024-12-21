import mongoose, { Schema, type Document } from "mongoose";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser extends Document {
  username: string;
  password: string;
  role: Role;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.USER },
  },
  {
    timestamps: true, // Menambahkan createdAt dan updatedAt secara otomatis
  }
);

export default mongoose.model<IUser>("User", UserSchema);
