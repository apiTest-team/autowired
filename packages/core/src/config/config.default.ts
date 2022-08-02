import { AppInfo, IAutowiredContainer } from "../interface";
import { IConfig } from "../interface";

/**
 * 默认配置文件
 * @param appContext
 * @param appInfo
 */
export default (appContext:IAutowiredContainer,appInfo:AppInfo):IConfig=>{
  return {
    singleInstance: true,
    openDevTools: false,
    hardGpu:{
      enable:false,
    },
    tray:{
      title:"AE",
      icon:"/public/images/tray_logo.png",
    },
    awakeProtocol:{
      protocol: "ae",
      args:[]
    }
  }
}