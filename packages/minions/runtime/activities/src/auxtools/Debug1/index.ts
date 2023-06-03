import { Activity, Input, AbstractActivity } from "@rxdrag/minions-runtime"
import { IActivityDefine } from "@rxdrag/minions-schema"

export interface IDebugConfig {
  tip?: string,
  closed?: boolean
}

@Activity(Debug.NAME)
export class Debug extends AbstractActivity<IDebugConfig> {
  public static NAME = "system.debug"

  constructor(meta: IActivityDefine<IDebugConfig>) {
    super(meta)
  }

  @Input()
  inputHandler(inputValue: any): void {
    if (!this.config?.closed) {
      console.log(`🪲${this.config?.tip || "Debug"}:`, inputValue)
    }
  }
}

