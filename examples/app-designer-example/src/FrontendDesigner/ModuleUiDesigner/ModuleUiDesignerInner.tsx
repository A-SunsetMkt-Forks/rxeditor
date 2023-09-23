import { ZoomableEditor, propertyIcon } from "@rxdrag/react-antd-shell"
import { memo, useMemo } from "react"
import { useParams } from "react-router-dom"
import { useQueryModule } from "../../hooks/useQueryModule"
import { useAppFrontend } from "../../hooks/useAppFrontend"
import { uiToolboxes } from "./config"
import { Button, TabsProps } from "antd"
import { SubFlows } from "../BottomConsole/SubFlows"
import styled from "styled-components"

const Label = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.token.colorTextSecondary};
  justify-content: flex-start;
  .anticon{
    margin-right: 4px !important;
  }

`

export const ModuleUiDesignerInner = memo(() => {
  const { moduleId } = useParams()
  const device = useAppFrontend()?.deviceType
  const { module } = useQueryModule(device, moduleId || "")
  const Toolbox = uiToolboxes[device || ""]
  const items: TabsProps['items'] = useMemo(() => {
    return [
      {
        label: <Label >
          行为流
        </Label>,
        key: "logicflow",
        children: <SubFlows />
      },
      {
        label: <Label >
          脚本
        </Label>,
        key: "script",
        children: "脚本控制器"
      },
      //把快捷控制器附加到物料上，放在属性面板配置
      // {
      //   label: <Label>快捷</Label>,
      //   key: "shortcurt",
      //   children: "快捷控制器"
      // },
    ]
  }, [])

  return (
    module
      ? <ZoomableEditor
        toolbox={
          Toolbox && <Toolbox />
        }
        schemas={module?.views}
        bottomConsole={{
          items,
          extra: <Button
            type="text"
            size="small"
            icon={<span style={{ fontSize: 12 }}>{propertyIcon}</span>}
          />
        }}
      />
      : <></>
  )
})