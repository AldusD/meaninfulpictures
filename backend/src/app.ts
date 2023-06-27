import express from 'express';
import cors from 'cors';
import loadEnv from './config/envs';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_, res) => res.status(200).send('Believe in yourself!'));

export function init() {
  return Promise.resolve(app);
}

export default app;
