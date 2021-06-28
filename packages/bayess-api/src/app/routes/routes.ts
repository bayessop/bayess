import * as express from 'express';
import GlobalRoutes from './routes-global';
import WalletRoutes from './routes-wallet';

export default function register(app: express.Application) {
  GlobalRoutes(app);
  WalletRoutes(app);
}