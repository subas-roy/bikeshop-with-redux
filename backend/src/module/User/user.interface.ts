import { Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type IUser = {
  
  name: string;
  age: number;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  photo?: string | null;
  phone?: string;
  address?: string;
  city?: string;
  role?: 'customer' | 'admin';
  userStatus: 'active' | 'inactive';
};

export type TUserRole = keyof typeof USER_ROLE;
