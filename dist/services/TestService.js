"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const TestRepository_1 = __importDefault(require("../repositories/TestRepository"));
/**
 * @description TestServive.
 */
class TestServive {
    constructor() {
        this.testRepository = TestRepository_1.default;
    }
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method` + this.testRepository.defaultMethod().text,
        };
    }
}
module.exports = new TestServive();
//# sourceMappingURL=TestService.js.map