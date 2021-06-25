import { Request, Response, NextFunction, request } from 'express';
import { verify } from 'jsonwebtoken';

type TPayload = {
  sub: string;
};

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.JSON_WEB_TOKEN_AUTH) as TPayload;

    request.user_id = sub;
  } catch (error) {
    return response.status(401).end();
  }

  return next();
}
