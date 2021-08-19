import express from 'express';
import MasterRouter from './routes/MasterRouter';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRouter';
import logging from './config/logging';
import config from './config/config';
import mongoose from 'mongoose';

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */


export class Server {
  public app = express();
  public router = MasterRouter;
}

