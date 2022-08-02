/**
 * 设置配置文件的类型声明
 */
declare module "@autowired/core" {
  interface AutowiredConfig {
    autoUpdater?:AutoUpdate
  }
}
/**
 * 应用升级配置
 */
export interface AutoUpdate {
  windows:boolean,
  macOs:boolean,
  linux:boolean,
  options:{
    provider:string,
    url:string,
  },
  force:boolean
}