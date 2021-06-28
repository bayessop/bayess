import { GlobalController } from '../controllers/controller-global';
import * as express from 'express';

/**
 * Generic routes that do not apply to any particular resource.
 */
export default function register(app: express.Application) {
  app.get('/', (req, res) => {
    res.status(200).end();
  });

  app.get('/api/v1/health', (req, res) => {
    res.status(200).end();
  });

  app.get('/metrics', (req, res) => {
    res.status(200).end();
  });

  app.get('/api/v1/echo', GlobalController.getEchoMessage);
}
