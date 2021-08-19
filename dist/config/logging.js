"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (namesapce, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namesapce}] ${message}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [INFO] [${namesapce}] ${message}`);
    }
};
const warn = (namesapce, message, object) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namesapce}] ${message}`, object);
    }
    else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namesapce}] ${message}`);
    }
};
const error = (namesapce, message, object) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namesapce}] ${message}`, object);
    }
    else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namesapce}] ${message}`);
    }
};
const debug = (namesapce, message, object) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namesapce}] ${message}`, object);
    }
    else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namesapce}] ${message}`);
    }
};
exports.default = {
    info,
    warn,
    error,
    debug,
};
//# sourceMappingURL=logging.js.map