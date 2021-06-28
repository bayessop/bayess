import * as express from 'express';
import { Wallet } from '../../../../bayess-wallet/src/main';

/**
 * Handles requests for Wallet resources.
 */
class WalletController {
  static async createIdentity(req: express.Request, res: express.Response) {
    res.status(200).json(new Wallet());
  }
}

export { WalletController };
