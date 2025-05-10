import { JwtPayload } from 'jsonwebtoken';
import { IUser } from '../../module/User/user.interface';

declare global {
  namespace Express {
    interface Request {
      decoded: JwtPayload;
      user: IUser;
    }
  }
}