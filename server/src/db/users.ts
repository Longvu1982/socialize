import mongoose from "mongoose";

const Users = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  mobile: String,
  image_url: String,
  user_id: String,
  isDelete: Boolean,
});

type UserType = mongoose.InferSchemaType<typeof Users>;

export const UserModel = mongoose.model("User", Users);

export const getUser = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ "authentication.sessionToken": sessionToken });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const changeActiveUserStatus = (
  id: string,
  values: { isDelete: boolean }
) => UserModel.findByIdAndUpdate(id, values);
export const updateUserStatusByUserId = (user_id: string, values: UserType) =>
  UserModel.findOneAndUpdate({ user_id }, values);
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
export const deleteUser = (user_id: string) => UserModel.deleteOne({ user_id });
