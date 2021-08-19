import TestRepository from "../../repositories/TestRepository";
import { ITestServiceInterface } from "./TestServiceInterface";

/**
 * @description TestServive.
 */
class TestServive implements ITestServiceInterface  {
  private testRepository = TestRepository;

  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
      testRepository: this.testRepository.defaultMethod().text,
    };
  }
}

export = new TestServive();
