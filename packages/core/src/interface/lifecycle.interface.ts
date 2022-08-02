import { IAutowiredContainer, IObjectLifeCycle } from "./container.interface";

/**
 * Lifecycle Definition
 * 生命周期定义
 */
export interface ILifeCycle extends Partial<IObjectLifeCycle> {
  onConfigLoad?(
    container: IAutowiredContainer,
  ): Promise<any>;
  onReady?(
    container: IAutowiredContainer,
  ): Promise<void>;
  onServerReady?(
    container: IAutowiredContainer,
  ): Promise<void>;
  onStop?(
    container: IAutowiredContainer,
  ): Promise<void>;
}