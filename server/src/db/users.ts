import mongoose from "mongoose";

const Users = new mongoose.Schema({
  fullName: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  mobile: String,
  image_url: String,
  user_id: String,
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
  isDelete: Boolean,
});

export const UserModel = mongoose.model("User", Users);

export const getUser = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ "authentication.sessionToken": sessionToken });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, A>) => new UserModel(values).save().then((user) => user.toObject());
export const changeActiveUserStatus = (
  id: string,
  values: { isDelete: boolean }
) => UserModel.findByIdAndUpdate(id, values);
export const updateUserById = (id: string, values: Record<string, A>) => UserModel.findByIdAndUpdate(id, values);
