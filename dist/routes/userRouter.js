"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const extractJWT_1 = __importDefault(require("../middleware/extractJWT"));
const router = express_1.default.Router();
router.get('/validate', extractJWT_1.default, userController_1.default.validateToken);
router.post('/register', userController_1.default.register);
router.post('/login', userController_1.default.login);
router.get('/get/all', userController_1.default.getAllusers);
router.get('/TokenAuthen', userController_1.default.validateToken);
module.exports = router;
//# sourceMappingURL=userRouter.js.map