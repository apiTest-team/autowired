import { AutowiredBootApplication } from "../../src/decorator/application.decorator";
import { AutowiredApplication } from "../../src";
import { ControllerTest } from "../controller/controller.test";

@AutowiredBootApplication({
  imports: [ControllerTest]
})
export class ElectronApplication {
  static async main(args:string[]){
    await new AutowiredApplication(ElectronApplication).run(args)
  }
}