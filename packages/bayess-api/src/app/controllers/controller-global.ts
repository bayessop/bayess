import * as express from 'express';

/**
 * Handles requests for Global resources.
 */
class GlobalController {
  /**
   * Default service echo message
   */
  static async getEchoMessage(req: express.Request, res: express.Response) {
    res.status(200).json({ api_version: 'v1.0.0', timestamp: new Date() });
  }
}

export { GlobalController };
