import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  campaigns: mongoose.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
