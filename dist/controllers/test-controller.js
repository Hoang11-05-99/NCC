"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const test_service_1 = __importDefault(require("../services/test-service"));
class TestController {
    constructor() {
        this._service = test_service_1.default;
    }
    defaultMethod() {
        const serviceText = this._service.defaultMethod();
        return {
            text: `You've reached the ${this.constructor.name} default method`,
            serviceText: serviceText.text
        };
    }
}
module.exports = new TestController();
//# sourceMappingURL=test-controller.js.map