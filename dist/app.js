"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const Server_1 = require("./Server");
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const logging_1 = __importDefault(require("./config/logging"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const NAMESPACE = 'Server';
const router = express_1.default();
/** Connect to Mongo */
mongoose_1.default
    .connect(config_1.default.mongo.url, config_1.default.mongo.options)
    .then((result) => {
    logging_1.default.info(NAMESPACE, 'connected to MongoDB!');
})
    .catch((error) => {
    logging_1.default.error(NAMESPACE, error.message, error);
});
/** Logging the request */
router.use((req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - 
  [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - 
    [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
});
/** Parse the request */
router.use(body_parser_1.default.urlencoded({ extended: false }));
router.use(body_parser_1.default.json());
/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATH DELETE POST PUT');
        return res.status(200).json({});
    }
});
/** Router */
router.use('/users', userRoutes);
/** Error Handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
/** Create the server */
const httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, () => logging_1.default.info(NAMESPACE, `Server running on ${config_1.default.server.hostname}:${config_1.default.server.port}`));
/**
 * Application class.
 * @description Handle init config and components.
 */
dotenv_1.default.config({
    path: ".env",
});
class Application {
    init() {
        this.initServer();
    }
    initServer() {
        this.server = new Server_1.Server();
    }
    start() {
        ((port = process.env.APP_PORT || 5000) => {
            this.server.app.listen(port, () => console.log(`> Listening on port ${port}`));
            this.server.app.use('/api', this.server.router);
        })();
    }
}
exports.Application = Application;
function userRoutes(arg0, userRoutes) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=app.js.map