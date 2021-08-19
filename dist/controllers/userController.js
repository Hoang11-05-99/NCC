"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRouter_1 = __importDefault(require("../models/userRouter"));
const signJWT_1 = __importDefault(require("../functions/signJWT"));
const NAMESPACE = "User";
const validateToken = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Token validated, user authorized");
    return res.status(200).json({
        message: "Authorized"
    });
};
const register = (req, res, next) => {
    let { username, password } = req.body;
    bcryptjs_1.default.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                message: hashError.message,
                error: hashError,
            });
        }
        const _user = new userRouter_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
            username,
            password: hash
        });
        return _user.save().then(user => {
            return res.status(201).json({
                user
            });
        })
            .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
    });
};
const login = (req, res, next) => {
    let { username, password } = req.body;
    userRouter_1.default.find({ username })
        .exec()
        .then(users => {
        if (users.length !== 1) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        bcryptjs_1.default.compare(password, users[0].password, (error, result) => {
            if (error) {
                logging_1.default.error(NAMESPACE, error.message, error);
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }
            else if (result) {
                signJWT_1.default(users[0], (_error, token) => {
                    if (_error) {
                        logging_1.default.error(NAMESPACE, 'Unable to sign token: ', _error);
                        return res.status(401).json({
                            message: 'Unauthorized',
                            error: _error,
                        });
                    }
                    else if (token) {
                        return res.status(200).json({
                            message: 'Auth Successful',
                            token,
                            user: users[0],
                        });
                    }
                });
            }
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error,
        });
    });
};
const getAllusers = (req, res, next) => {
    userRouter_1.default.find()
        .select('-password')
        .exec()
        .then(users => {
        return res.status(200).json({
            users,
            count: users.length
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error,
        });
    });
};
exports.default = { validateToken, register, login, getAllusers };
//# sourceMappingURL=userController.js.map