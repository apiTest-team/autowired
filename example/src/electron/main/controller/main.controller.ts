import { Action, Autowired, BaseController, Controller, Init } from "@autowired/core";
import { MainWindow } from "../window/main";
import { BrowserWindow, IpcMainEvent } from "electron";
import { UpdaterService } from "@autowired/updater";

@Controller("/main")
export class MainController extends BaseController{

  @Autowired()
  mainWindow:MainWindow
  @Autowired()
  updateService:UpdaterService

  @Init()
  async init(){
    console.log(this.updateService);
  }

  @Action("/windowAction")
  async windowAction(a:IpcMainEvent,b:any){
    console.log(this.updateService);
    // switch (b.type) {
    //   case "minimize":
    //     this.windowsInstance?.minimize();
    //     break;
    //   case "maximize":
    //     if (this.windowsInstance?.isMaximized()) {
    //       this.windowsInstance.unmaximize();
    //     } else {
    //       this.windowsInstance?.maximize();
    //     }
    //     break;
    //   case "close":
    //     this.windowsInstance?.close();
    //     break;
    //   default:
    //     break;
    // }
  }
}