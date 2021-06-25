import { Request, Response } from 'express';
import { ListUserReceiverComplimentsService } from '../services/Compliment/ListUserReceiverComplimentsService';

class ListUserReceiverComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiverComplimentsService =
      new ListUserReceiverComplimentsService();

    const compliments = await listUserReceiverComplimentsService.execute(
      user_id
    );

    return response.status(200).json(compliments);
  }
}

export { ListUserReceiverComplimentsController };
