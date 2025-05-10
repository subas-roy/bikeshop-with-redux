import catchAsync from "../../app/utils/catchAsync"
import { OrderService } from "./order.service"
import sendResponse from "../../app/utils/sendResponse"
import httpStatus from 'http-status-codes';
import { IUser } from "../User/user.interface";
import { Types } from "mongoose";

const createOrder = catchAsync(async (req, res) => {
  const user = req.user; 
  console.log('Authenticated User:', user.name);
  console.log('product:', req.body);

  const result = await OrderService.createOrder(user, req.body, req.ip!);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order created successfully",
    data: result,
  });
});

const getOrder = catchAsync(async (req, res) => {
    const result = await OrderService.getOrder();
    
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Getting order successfully",
        data: result,
    })
})

const verifyPayment = catchAsync(async(req, res) =>{
    const order = await OrderService.verifyPayment(req.query.order_id as string);

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: " order varified successfully",
        data: order,
    })
})

export const OrderController = {
    createOrder,
     verifyPayment,
     getOrder
}