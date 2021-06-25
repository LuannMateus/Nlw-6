import { Request, Response, NextFunction } from 'express';
import { GetUserService } from '../services/User/GetUserByIdService';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const getUserService = new GetUserService();

  const { admin } = await getUserService.findById(user_id);

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: 'Unauthorized',
  });
}
