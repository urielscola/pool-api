import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { dbConnect } from './config/database';
const app = express();
import routes from './routes';

dbConnect();
app.use(express.json());
app.use('/', routes);

export default app;
