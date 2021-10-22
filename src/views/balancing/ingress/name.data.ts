import { BasicColumn, FormSchema } from '/@/components/Table';
import { geNamespaceListWith } from '/@/api/kubernetes/namespace';

export const columns: BasicColumn[] = [
  {
    title: '命名空间',
    dataIndex: 'namespace',
    width: 200,
  },
  {
    title: '路由名称',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '域名',
    dataIndex: 'host',
    width: 180,
  },
  {
    title: '服务名称',
    dataIndex: 'serviceName',
    width: 180,
  },
  {
    title: '服务端口',
    dataIndex: 'servicePort',
    width: 180,
  },
  {
    title: '地址',
    dataIndex: 'address',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'creationTimestamp',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'namespace',
    label: '命名空间',
    component: 'ApiSelect',
    componentProps: {
      api: geNamespaceListWith,
      resultField: 'data',
      labelField: 'name',
      valueField: 'name',
    },
    colProps: { span: 8 },
  },
  // {
  //   field: 'status',
  //   label: '状态',
  //   component: 'Select',
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: '0' },
  //       { label: '停用', value: '1' },
  //     ],
  //   },
  //   colProps: { span: 8 },
  // },
];

export const formSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '角色名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'roleValue',
    label: '角色值',
    required: true,
    component: 'Input',
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
  {
    label: ' ',
    field: 'menu',
    slot: 'menu',
    component: 'Input',
  },
];
