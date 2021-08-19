"use strict";
class TestServive {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`,
        };
    }
}
module.exports = new TestServive();
//# sourceMappingURL=test-service.js.map