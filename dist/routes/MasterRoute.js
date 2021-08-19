"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const TestRouter_1 = __importDefault(require("./TestRouter"));
class MasterRouter {
    constructor() {
        this._router = express_1.Router();
        this.configure();
        this.initMasterRouter();
    }
    get router() {
        return this._router;
    }
    configure() {
        // define onfigurations
    }
    /**
     * Connect routes to their matching routers.
     */
    initMasterRouter() {
        this._router.use("/test", TestRouter_1.default);
    }
}
module.exports = new MasterRouter().router;
//# sourceMappingURL=MasterRoute.js.map