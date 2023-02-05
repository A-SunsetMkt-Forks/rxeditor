import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { ComponentControllers } from "runner/reaction"
import { ComponentController } from "runner/reaction/controllers/ComponentController"
import { useMaterials } from "runner/reaction/hooks/useMaterials"
import { IControllerMeta } from "runner/reaction/interfaces/metas"
import { ControllersContext } from "./contexts"
import { useControllers } from "./hooks/useControllers"

export function withController(WrappedComponent: React.FC<any> | React.ComponentClass<any>, meta?: IControllerMeta): React.FC<any> | React.ComponentClass<any> {

  if (!meta?.id) {
    return WrappedComponent
  }

  return memo((props: any) => {
    const [changedProps, setChangeProps] = useState<any>()
    const controllers = useControllers()
    const materials = useMaterials()
    const controller = useMemo(
      () => new ComponentController(meta, controllers, materials),
      [materials, controllers]
    )

    const newControllers: ComponentControllers = useMemo(() => {
      return { ...controllers, [controller.id]:controller }
    }, [controller, controllers])

    const newProps = useMemo(() => {
      return { ...props, ...controller.events, ...changedProps }
    }, [changedProps, controller.events, props])

    const handlePropsChange = useCallback((name: string, value: any) => {
      setChangeProps((changedProps: any) => ({ ...changedProps, [name]: value }))
    }, [])

    useEffect(() => {
      const unlistener = controller.subscribeToPropsChange(handlePropsChange)
      return unlistener
    }, [controller, handlePropsChange])

    useEffect(() => {
      controller?.initEvent?.()
      return controller?.destoryEvent
    }, [controller])

    return <ControllersContext.Provider value={newControllers}>
      <WrappedComponent {...newProps} />
    </ControllersContext.Provider>
  })
}
