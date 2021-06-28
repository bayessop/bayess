import { WalletController } from '../controllers/controller-wallet';
import * as express from 'express';

/**
 * Wallet routes
 */
export default function register(app: express.Application) {
  app.post('/api/v1/wallet', WalletController.createIdentity);
}
