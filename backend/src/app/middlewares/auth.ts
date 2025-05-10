// import { NextFunction, Request, Response } from 'express';
// import catchAsync from '../utils/catchAsync';
// import AppError from '../errors/AppError';
// import httpStatus from 'http-status';
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import config from '../config';
// import { TUserRole } from '../../module/User/user.interface';
// import UserModel from '../../module/User/user.model';

// const auth = (...requiredRoles: TUserRole[]) => {
//   return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const token = req.headers.authorization;

//     // if the token is sent from client
//     if (!token) {
//       throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
//     }

//     // // check if the token is valid
//     // jwt.verify(
//     //   token,
//     //   config.jwt_access_secret as string,
//     //   function (err, decoded) {
//     //     // err
//     //     if (err) {
//     //       throw new AppError(
//     //         httpStatus.UNAUTHORIZED,
//     //         'You are not authorized!',
//     //       );
//     //     }
//     //     // decoded undefined
//     //     // console.log(decoded);

//     //     const role = (decoded as JwtPayload).role;

//     //     // check if role is included
//     //     if (requiredRoles && !requiredRoles.includes(role)) {
//     //       throw new AppError(
//     //         httpStatus.UNAUTHORIZED,
//     //         'You are not authorized!',
//     //       );
//     //     }

//     //     req.user = decoded as JwtPayload; // assign user to express

//         // checking if the given token is valid
//     const decoded = jwt.verify(
//       token,
//       config.jwt_access_secret as string,
//     ) as JwtPayload;

//     const { role, email, iat } = decoded;

//     // checking if the user is exist
//     const user = await UserModel.findOne({ email });

//     if (!user) {
//       throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
//     }
//     // checking if the user is already deleted

//     const isDeleted = user?.$isDeleted;

//     if (isDeleted()) {
//       throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
//     }

//     // checking if the user is blocked
//     const userStatust = user?.userStatus;

//     // if (userStatust === 'blocked') {
//     //   throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
//     // }

//     if (
//       user.needsPasswordChange &&
//       new UserModel(user.needsPasswordChange,
//         iat as number)
//     ) {
//       throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
//     }

//     if (requiredRoles && !requiredRoles.includes(role)) {
//       throw new AppError(
//         httpStatus.UNAUTHORIZED,
//         'You are not authorized  hi!',
//       );
//     }

//     req.user = decoded as JwtPayload;

//      next();

//   });
// };

// export default auth;

import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../../module/User/user.interface';
import UserModel from '../../module/User/user.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }
    let decoded
    try{
       decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    }catch(err){
      throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized")
    }



    const { role, email, iat } = decoded;

    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You are not authorized  hi!"
      );
    }

    // if (user.isDeleted) {
    //   throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted!');
    // }

    if (user.userStatus === 'inactive') {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
    }

    if (
      user.needsPasswordChange &&
      new UserModel(user.needsPasswordChange, iat as number)
    ) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
    }

    if (requiredRoles.length && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    req.user = user;
    next();
  });
};

export default auth;
