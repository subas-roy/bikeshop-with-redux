import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { UserServices } from './user.service';
import httpStatus from 'http-status-codes';

const createUSer = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await UserServices.createUserToDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});
const getUser = catchAsync(async (req, res) => {
  const result = await UserServices.getUserToDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User getting successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  console.log(req.params);
  const userId = req.params.userId;

  const result = await UserServices.getSingleUserToDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User getting successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  const body = req.body;
  const result = await UserServices.updateUserToDB(userId, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  await UserServices.deleteUserToDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: {},
  });
});

export const UserController = {
  createUSer,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
