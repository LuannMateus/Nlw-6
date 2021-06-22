import 'reflect-metadata';
import express from 'express';
import { router } from './routes';

import './database';

const app = express();

app.use(express.json());

app.use('/api/v1', router);

app.listen(3000, (): void =>
  console.log('Server is running in: http://localhost:3000/')
);
