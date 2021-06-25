import { Request, Response } from 'express';
import { ListTagsService } from '../services/Tag/ListTagsService';

class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagService = new ListTagsService();

    const tags = await listTagService.execute();

    return response.status(200).json(tags);
  }
}

export { ListTagsController };
