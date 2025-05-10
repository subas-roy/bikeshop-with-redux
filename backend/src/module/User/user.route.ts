import auth from '../../app/middlewares/auth';
import { USER_ROLE } from './user.constant';
import { UserController } from './user.controller';
import express from 'express';

const router = express.Router();

router.post('/create-user', UserController.createUSer);
router.get('/:userId', UserController.getSingleUser);
router.delete('/:userId', UserController.deleteUser);
router.put('/:userId', UserController.updateUser);
  router.get ('/', auth(USER_ROLE.admin,), UserController.getUser);



export const UserRouters = router;
