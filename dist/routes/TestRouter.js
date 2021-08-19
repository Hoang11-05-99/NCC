"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const TestService_1 = __importDefault(require("../services/test/TestService"));
const BaseRouter_1 = require("./BaseRouter");
/**
 * @description TestRouter.
 */
class TestRouter extends BaseRouter_1.BaseRouter {
    constructor() {
        super();
        this._service = TestService_1.default;
        this.init();
    }
    /**
     * Connect routes to their matching controller endpoints.
     */
    init() {
        this.router.get("/", (req, res, next) => {
            res.status(200).json(this._service.defaultMethod());
        });
    }
}
module.exports = new TestRouter().router;
//# sourceMappingURL=TestRouter.js.map