import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

type TAuthenticateRequest = {
  email: string;
  password: string;
};

class AuthenticateUserService {
  async execute({ email, password }: TAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({
      email,
    });

    if (!user) throw new Error('Email/Password incorrect');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Email/Password incorrect');

    const token = sign(
      {
        email: user.email,
      },
      process.env.JSON_WEB_TOKEN_AUTH,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
