import { z } from 'zod';

export const UserValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  age: z
    .number({
      required_error: 'Age is required',
    })
    .min(1, 'Age must be a positive number'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email format'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must be at least 6 characters'),
  photo: z.string().optional(),
  phone: z.string().optional(),
  adress: z.string().optional(),
  city: z.string().optional(),
  role:z.string().optional(),
  userStatus:z.string().optional(),

});

export const UserValidation = {
  UserValidationSchema,
};
