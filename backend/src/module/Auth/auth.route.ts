import express from 'express';
import validateRequest from '../../app/middlewares/validateReuest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';
import { UserValidation } from '../User/user.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.LoginValidationSchema),
  AuthControllers.loginUser,
);

router.post(
  '/register',
  validateRequest(UserValidation.UserValidationSchema),
  AuthControllers.registationUser,
);

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.RefreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

router.post('/logout', AuthControllers.logoutUser);

export const AuthRoutes = router;
