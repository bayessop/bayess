import * as dotenv from 'dotenv';
dotenv.config();
import * as http from 'http';
import * as express from 'express';
import * as cors from 'cors';

import { Bootstrap } from './utils/bootstrap';
import * as Config from './utils/config';
import Routes from './app/routes/routes';


const app = express();
app.use(cors())
Routes(app);

const server: http.Server = app.listen(Config.port, () => {
  console.log(`Server listening on port ${Config.port}`);
});

Bootstrap.addGracefulShutdown(server);

export default server;