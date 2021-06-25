import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/Compliment/CreateComplimentService';

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;

    const { user_id: user_sender } = request;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    return response.status(200).json(compliment);
  }
}

export { CreateComplimentController };
