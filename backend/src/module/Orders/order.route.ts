import express, { Router } from 'express';

import { OrderController } from './order.controller';
import auth from '../../app/middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const orderRouter = Router();

//  orderRouter.post("/create-order", auth(USER_ROLE.customer), OrderController.createOrder);

 orderRouter.get("/verify", auth(USER_ROLE.customer), OrderController.verifyPayment);

 orderRouter
   .route("/")
   .post(auth(USER_ROLE.customer), OrderController.createOrder)
   .get(auth(USER_ROLE.customer), OrderController.getOrder);
   
  export default orderRouter;