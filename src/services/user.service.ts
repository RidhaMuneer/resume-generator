import { User, IUser } from '../models/user.model';
import { hashPassword } from '../utils/hash';

export const findUserById = async (id: string) => {
  return User.findById(id).select('-password');
};

export const createUser = async (userData: Partial<IUser>) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const userObject = { ...userData };
  userObject.password = await hashPassword(userObject.password!);
  
  const user = new User(userObject);
  await user.save();

  const {password, ...rest} = user.toObject();

  return rest;
};

export const updateUser = async (id: string, userData: Partial<IUser>) => {
  return User.findByIdAndUpdate(
    id,
    { $set: userData },
    { new: true }
  ).select('-password');
};

export const deleteUser = async (id: string) => {
  return User.findByIdAndUpdate(
    id,
    { $set: { isActive: false } },
    { new: true }
  );
};