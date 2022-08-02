import {Provide} from "../../src";
import {Autowired} from "../../src";
import {getPropertyAutowired} from "../../src";


@Provide()
class InjectChild {

}

class Autowired2 {

}


class Test {
    @Autowired()
    aa:any

    @Autowired()
    ee!: InjectChild;
}


let meta =  getPropertyAutowired(Test)
console.log(meta)