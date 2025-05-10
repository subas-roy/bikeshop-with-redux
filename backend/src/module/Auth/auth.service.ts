import AppError from '../../app/errors/AppError';
import { IUser } from '../User/user.interface';
import UserModel from '../User/user.model';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from 'http-status';
import config from '../../app/config';

const register = async (payload: IUser) => {
  const result = await UserModel.create(payload);
  return result;
};

const login = async (payload: { email: string; password: string }) => {
  const user = await UserModel.findOne({ email: payload?.email }).select(
    '+password',
  );

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  // checking the user active

  const userStatus = user?.userStatus;
  if (userStatus === 'inactive') {
    throw new Error('This user is blocked Account!!');
  }

  // password checking

  const matchedPassword = await bcrypt.compare(
    payload?.password,
    user?.password,
  );

  if (!matchedPassword) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'invalid password! Please Enter currect Password',
    );
  }

  // create jwt token

  const jwtTokenPayload = {
    email: user?.email,
    role: user?.role,
  };
  const accessToken = jwt.sign(
    jwtTokenPayload,
    process.env.JWT_ACCESS_SECRET as string,
    { expiresIn: '5d' },
  );

  const refreshToken = jwt.sign(
    jwtTokenPayload,
    config.jwt_refresh_secret as string,
    { expiresIn: '365d' },
  );

 
  // const tokenGenarate = jwt.sign(
  //   jwtTokenPayload,
  //   config.jwt_access_secret as string,
  //   { expiresIn: '5d' },
  // );

  return {
    accessToken,
    refreshToken,
    user,
    needsPasswordChange: user?.needsPasswordChange,
  };
};

const refreshToken = async (token: string) => {
  // check if the token is valid
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;

  const { email, iat } = decoded;

  const user = await UserModel.findOne({ email: email });

  // checking the user active
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  // checking the user active
  const userStatus = user?.userStatus;
  if (userStatus === 'inactive') {
    throw new Error('This user is blocked Account!!');
  }

  // if (
  //   user.needsPasswordChange &&
  //   UserModel.findOne(user.needsPasswordChange, iat as number)
  // ) {
  //   throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
  // }
  // create jwt token
  const jwtTokenPayload = {
    email: user?.email,
    role: user?.role,
  };

  const accessToken = jwt.sign(
    jwtTokenPayload,
    config.jwt_access_secret as string,
    { expiresIn: '5d' },
  );
  console.log('JWT_SECRET:', config.jwt_access_secret);
  return {
    accessToken,

  };
};

const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string },
) => {
  // checking if the user is exist
  const user = await UserModel.findOne(userData.userId);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  // checking if the user is already deleted

  const isDeleted = user?.$isDeleted;

  if (isDeleted()) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  }

  // checking if the user is blocked

  const userStatusr = user?.userStatus;

  // if (userStatusr === 'blocked') {
  //   throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  // }

  //checking if the password is correct

  // if (!(await UserModel.findOne(payload?.oldPassword, user?.password)))
  //   throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  // hash new password
  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(10),
  );

  await UserModel.findOneAndUpdate(
    {
      id: userData.userId,
      role: userData.role,
    },
    {
      password: newHashedPassword,
      needsPasswordChange: false,
      passwordChangedAt: new Date(),
    },
  );

  return null;
};

export const AuthServices = {
  register,
  login,
  refreshToken,
  changePassword
};
