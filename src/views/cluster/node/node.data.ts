import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'Cluster Name',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '系统类型',
    dataIndex: 'oSImage',
    width: 180,
  },
  {
    title: '运行时',
    dataIndex: 'containerRuntimeVersion',
    width: 180,
  },
  {
    title: '控制器版本',
    dataIndex: 'kubeletVersion',
    width: 180,
  },
  {
    title: '系统平台',
    dataIndex: 'architecture',
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
    field: 'roleNme',
    label: '集群名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
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
