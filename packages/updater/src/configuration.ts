import { AutowiredContainer, ConfigService, Configuration, getProvideUUID, WindowService } from "@autowired/core";
import * as defaultConfig from "./config.default"
import { UpdaterService } from "./service/updater.service";

@Configuration({
  namespace:"updater",
  importConfigs:[
    {
      default: defaultConfig
    }
  ]
})
export class UpdaterConfiguration {
  async onReady(container:AutowiredContainer){
    await container.getAsync(UpdaterService,[container])
  }
}