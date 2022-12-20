import express from 'express';
import cors from 'cors';
import compression from 'compression';
import postRoutes from './routes/posts';

export default function expressApp(functionName) {
  const app = express();

  app.use(compression());
  app.use(cors());
  app.use(express.json()); 

  const routerBasePath = process.env.NODE_ENV === 'dev'
    ? `/${functionName}`
    : `/.netlify/functions/${functionName}`;

  app.use(`${routerBasePath}/posts`, postRoutes);

  return app;
}