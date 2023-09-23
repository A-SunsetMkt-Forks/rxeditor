import { memo } from "react"
import styled from "styled-components"
import { Button, Collapse, CollapseProps, Space } from "antd"
import { AppstoreOutlined, FunctionOutlined, UnorderedListOutlined } from "@ant-design/icons"
import { ResizableColumn } from "@rxdrag/react-antd-shell"

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

const LeftNav = styled.div`
  display: flex;
  flex-flow: column;
  width: 32px;
  padding: 8px;
  align-items: center;
  border-right: solid 1px ${props => props.theme.token?.colorBorderSecondary};
`

const LeftColumn = styled(ResizableColumn)`
  border-right: solid 1px ${props => props.theme.token?.colorBorderSecondary};
`
const text = `
  A dog is a typ
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '用户管理',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: '设备端级',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: '应用级',
    children: <p>{text}</p>,
  },
];

export const SubFlows = memo(() => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Container>
      <LeftNav>
        <Space direction="vertical">
          <Button type="text" icon={<AppstoreOutlined />} />
          <Button type="link" icon={<UnorderedListOutlined />} />
          <Button type="text" icon={<FunctionOutlined />} />
        </Space>
      </LeftNav>
      <LeftColumn
        width={260}
        maxWidth={500}
        minWidth={160}
      >
        <Collapse ghost items={items} defaultActiveKey={['1']} onChange={onChange} />
      </LeftColumn>
    </Container>
  )
})