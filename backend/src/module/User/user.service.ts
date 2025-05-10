import { IUser } from './user.interface';
import UserModel from './user.model';

const createUserToDB = async (payload: IUser):Promise<IUser> => {
  // payload.role = 'admin';
  const result = await UserModel.create(payload);
  return result;
};

const getUserToDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserToDB = async (id: string) => {
  const result = await UserModel.findById(id);
  return result;
};

const updateUserToDB = async (id: string, data: IUser) => {
  const result = await UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteUserToDB = async (id: string) => {
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  createUserToDB,
  getUserToDB,
  getSingleUserToDB,
  updateUserToDB,
  deleteUserToDB
};
