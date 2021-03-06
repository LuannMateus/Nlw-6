import 'reflect-metadata';
import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';

import './database';

const app = express();

app.use(express.json());

app.use('/api/v1', router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json({
        error: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
);

app.listen(3000, (): void =>
  console.log('Server is running in: http://localhost:3000/')
);
