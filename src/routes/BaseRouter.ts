import { Router } from "express";
import bodyParser = require("body-parser");

export abstract class BaseRouter {
  private _router = Router();

  get router() {
    return this._router;
  }

  protected abstract init();
}
