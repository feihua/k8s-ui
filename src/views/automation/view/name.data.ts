import { BasicColumn, FormSchema } from '/@/components/Table';
import { getViewListWith } from '/@/api/jenkins/view';

export const columns: BasicColumn[] = [
  {
    title: '视图名称',
    dataIndex: 'name',
    width: 250,
    align: 'left',
  },
  {
    title: '视图备注',
    dataIndex: 'description',
    align: 'left',
    width: 150,
    customRender: ({ record }) => {
      const description = record.description;
      if (description === '') {
        return record.name;
      } else {
        return description;
      }
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '视图空间',
    component: 'ApiSelect',
    componentProps: {
      api: getViewListWith,
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
