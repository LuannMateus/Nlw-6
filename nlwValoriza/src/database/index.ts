import { createConnection } from 'typeorm';

try {
  createConnection();
  console.log('Connected with database!');
} catch (connectionError) {
  throw new Error(`Something is wrong! Error: ${connectionError}`);
}
