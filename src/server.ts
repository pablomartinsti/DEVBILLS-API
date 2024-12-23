import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import { setupMongo } from './database';
import { routes } from './routes';
import { errorHandler } from './middleware/error-handler.middleware.ts';

setupMongo().then(() => {
  const port = process.env.PORT || 3333;
  const app = express();
  app.use(cors({ origin: process.env.FRONT_URL }));
  app.use(json());
  app.use(routes);
  app.use(errorHandler);

  app.listen(port, () => console.log(`🚀 App is running at port!${port}`));
});
