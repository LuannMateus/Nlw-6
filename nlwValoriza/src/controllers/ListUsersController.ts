import { Request, Response } from 'express';
import { ListUsersService } from '../services/User/ListUsersService';

class ListUsersController {
  async handle(_request: Request, response: Response) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return response.status(200).json(users);
  }
}

export { ListUsersController };
