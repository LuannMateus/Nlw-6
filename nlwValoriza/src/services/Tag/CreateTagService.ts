import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../../repositories/TagsRepositories';

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) throw new Error('Incorrect name!');

    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) throw new Error('Tag already exists!');

    const tag = tagsRepositories.create({
      name,
    });

    try {
      await tagsRepositories.save(tag);
    } catch (error) {
      throw new Error('Error: ' + error);
    }

    return tag;
  }
}

export { CreateTagService };
