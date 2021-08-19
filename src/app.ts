import { Server } from "./Server";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import config from "./config/config";
import logging from "./config/logging";
import bodyParser from "body-parser";
import http from 'http';



const NAMESPACE = 'Server';
const router = express();

/** Connect to Mongo */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        logging.info(NAMESPACE, 'connected to MongoDB!');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    })



    
/** Logging the request */
router.use((req, res, next) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - 
  [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - 
    [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
  })
})

/** Parse the request */
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'OPTIONS')
  {
    res.header('Access-Control-Allow-Methods', 'GET PATH DELETE POST PUT');
    return res.status(200).json({});
  }
});

/** Router */
router.use('/users', userRoutes)

/** Error Handling */
router.use((req, res, next) => {
  const error = new Error('not found');

  return res.status(404).json({
    message: error.message
  });
});

/** Create the server */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));



/**
 * Application class.
 * @description Handle init config and components.
 */
 dotenv.config({
  path: ".env",
});


export class Application {
  server: Server;

  init() {
    this.initServer();
  }

  private initServer() {
    this.server = new Server();
  }

  start() {
    ((port = process.env.APP_PORT || 5000) => {
      this.server.app.listen(port, () =>
        console.log(`> Listening on port ${port}`)
      );
      this.server.app.use('/api', this.server.router);
    })();
  }
}
function userRoutes(arg0: string, userRoutes: any) {
  throw new Error("Function not implemented.");
}

