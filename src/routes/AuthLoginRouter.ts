import { NextFunction, Request, Response, Router } from "express";
import fs = require("fs");
import { BaseRouter } from "./BaseRouter";


const fakeData = {
  result: {
    application: {
      version: "4.3.0.0",
      releaseDate: "2021-07-20T15:49:07.1350156+07:00",
      features: {},
    },
    user: null,
    tenant: null,
  },
  targetUrl: null,
  success: true,
  error: null,
  unAuthorizedRequest: false,
  __abp: true,
};

/**
 * @description AuthLoginRouter
 */
class AuthLoginRouter extends BaseRouter{


  constructor() {
    super();
    this.init();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  protected init() {
    this.router.get(
      "/Session/GetCurrentLoginInformations",
      (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json(fakeData);
      }
    );
  }
}

export = new AuthLoginRouter().router;
