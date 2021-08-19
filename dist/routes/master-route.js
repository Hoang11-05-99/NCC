"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const test_router_1 = __importDefault(require("./test-router"));
const bodyParser = require("body-parser");
class MasterRouter {
    constructor() {
        this._router = express_1.Router();
        this.configure();
        this.init();
    }
    get router() {
        return this._router;
    }
    /**
     * Configuration
     */
    configure() {
        this._router.use((req, res, next) => {
            console.log(req.originalUrl);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, token, X-Requested-With, Content-Type, Accept, device-unique-identifier, platform");
            next();
        });
        this._router.use(bodyParser.json()); // to support JSON-encoded bodies
        this._router.use(bodyParser.urlencoded({
            // to support URL-encoded bodies
            extended: true,
        }));
    }
    /**
     * Connect routes to their matching routers.
     */
    init() {
        this._router.use("/test", test_router_1.default);
    }
}
module.exports = new MasterRouter().router;
//# sourceMappingURL=master-route.js.map