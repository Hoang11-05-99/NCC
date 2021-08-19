import { NextFunction, Request, Response } from "express";
import TestService from "../services/test/TestService";
import { BaseRouter } from "./BaseRouter";

/**
 * @description TestRouter.
 */
class TestRouter extends BaseRouter {
  private _service = TestService;

  constructor() {
    super();
    this.init();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  protected init() {
    this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._service.defaultMethod());
    });
  }
}

export = new TestRouter().router;
