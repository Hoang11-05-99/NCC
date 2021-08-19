"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// load the environment variables from the .env file
function bootstrap() {
    const application = new app_1.Application();
    application.init();
    application.start();
}
bootstrap();
//# sourceMappingURL=index.js.map