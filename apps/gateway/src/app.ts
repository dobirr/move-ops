import express, { Express } from 'express';
import cors from 'cors';

import apiRouters from './routes/index.routes.js';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use(apiRouters);

export default app;
