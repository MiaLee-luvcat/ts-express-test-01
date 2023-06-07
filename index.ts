import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { apiRouter } from './router';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.disable('x-powered-by');

app.use(
  '/api',
  apiRouter()
);

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript + Node.js + Express Server');
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${ PORT }`);
});