import authLoginRouter from "./AuthLoginRouter";
import { BaseRouter } from "./BaseRouter";
import testRouter from "./TestRouter";
import bodyParser = require("body-parser");
import cors = require("cors");

class MasterRouter extends BaseRouter {
  constructor() {
    super();
    this.configure();
    this.init();
  }

  private configure() {
    // define onfigurations
    this.router.use(cors());

    this.router.use(bodyParser.json()); // to support JSON-encoded bodies
    this.router.use(
      bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true,
      })
    );
  }

  /**
   * Connect routes to their matching routers.
   */
   protected init() {
    this.router.use("/test", testRouter);
    this.router.use("/services/app", authLoginRouter);
  }
}

export = new MasterRouter().router;
