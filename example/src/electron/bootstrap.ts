import { AutowiredApplication, AutowiredBootApplication } from "@autowired/core";
import * as updater from "@autowired/updater"

@AutowiredBootApplication({
    imports:[
        updater
    ]
})
export class ApiTestApplication {
    public static async main(...args:string[]){
        await AutowiredApplication.run(ApiTestApplication,args)
    }
}