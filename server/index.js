import express from 'express';
import cors from 'cors';
import compression from 'compression';

export default function expressApp(functionName) {
  const app = express();
  const router = express.Router();
  
  router.use(compression());

  const routerBasePath = process.env.NODE_ENV === 'dev'
    ? `/${functionName}`
    : `/.netlify/functions/${functionName}/`;
  
  router.get('/hello/', (_req, res) => {
    res.send('hello world')
  });

  app.use(routerBasePath, router);

  router.use(cors());
  router.use(express.json());

  return app;
}