import { INodeSchema } from "@rxdrag/schema";
import { IModule, IModuleCategory } from "../interfaces/module";
import { DeviceType } from "../interfaces";

const rootNodeSchema: INodeSchema = {
  componentName: "Page"
}

export const defaultModules: { [device: string]: IModule[] | undefined } = {
  [DeviceType.admin]: [
    {
      id: "users",
      title: "用户管理",
      views: [
        {
          title: "入口页",
          schema: rootNodeSchema,
        },
        {
          title: "编辑对话框",
          schema: rootNodeSchema,
        }
      ]
    },
    {
      id: "suppliers",
      title: "供应商"
    },
    {
      id: "customers",
      title: "客户"
    }
  ],
  [DeviceType.h5]: [
    {
      id: "users",
      title: "用户管理(h5)",
      views: [
        {
          title: "入口页(h5)",
          schema: rootNodeSchema,
        },
        {
          title: "编辑对话框",
          schema: rootNodeSchema,
        }
      ]
    },
    {
      id: "suppliers",
      title: "供应商(h5)"
    },
    {
      id: "customers",
      title: "客户(h5)"
    }
  ],
  [DeviceType.website]: [
    {
      id: "users",
      title: "用户管理(门户)",
      views: [
        {
          title: "入口页(门户)",
          schema: rootNodeSchema,
        },
        {
          title: "编辑对话框",
          schema: rootNodeSchema,
        }
      ]
    },
    {
      id: "suppliers",
      title: "供应商(门户)"
    },
    {
      id: "customers",
      title: "客户(门户)"
    }
  ],
  [DeviceType.largeScreen]: [
    {
      id: "users",
      title: "用户管理(大屏)",
      views: [
        {
          title: "入口页(大屏)",
          schema: rootNodeSchema,
        },
        {
          title: "编辑对话框",
          schema: rootNodeSchema,
        }
      ]
    },
    {
      id: "suppliers",
      title: "供应商(大屏)"
    },
    {
      id: "customers",
      title: "客户(大屏)"
    }
  ],
}

export const defaultModuleCategories: { [device: string]: IModuleCategory[] | undefined } = {
  [DeviceType.admin]: [
    {
      id: 'basics',
      title: '基础模块',
      modules: [
        {
          id: "users",
          title: "用户管理",
        },
      ]
    },
    {
      id: 'crm',
      title: '客户关系CRM',
      modules: [
        {
          id: "suppliers",
          title: "供应商",
        },
        {
          id: "customers",
          title: "客户",
        },
      ]
    },
  ],
  [DeviceType.h5]: [
    {
      id: 'basics',
      title: '基础模块(H5)',
      modules: [
        {
          id: "users",
          title: "用户管理",
        },
      ]
    },
    {
      id: 'crm',
      title: '客户管理(H5)',
      modules: [
        {
          id: "suppliers",
          title: "供应商",
        },
        {
          id: "customers",
          title: "客户",
        },
      ]
    },
  ],
  [DeviceType.website]: [
    {
      id: 'basics',
      title: '基础模块(门户)',
      modules: [
        {
          id: "users",
          title: "用户管理",
        },
      ]
    },
    {
      id: 'crm',
      title: '客户管理(门户)',
      modules: [
        {
          id: "suppliers",
          title: "供应商",
        },
        {
          id: "customers",
          title: "客户",
        },
      ]
    },
  ],
  [DeviceType.largeScreen]: [
    {
      id: 'basics',
      title: '基础模块(大屏)',
      modules: [
        {
          id: "users",
          title: "用户管理",
        },
      ]

    },
    {
      id: 'crm',
      title: '客户管理(大屏)',
      modules: [
        {
          id: "suppliers",
          title: "供应商",
        },
        {
          id: "customers",
          title: "客户",
        },
      ]
    },
  ],
}

