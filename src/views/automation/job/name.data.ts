import { BasicColumn, FormSchema } from '/@/components/Table';
import { getViewListWith } from '/@/api/jenkins/view';
import {h} from "vue";
import {Tag} from "ant-design-vue";

export const columns: BasicColumn[] = [
  {
    title: '项目名称',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '最后构建',
    dataIndex: 'color',
    width: 200,
    customRender: ({ record }) => {
      const color = record.color;
      if (color === 'blue') {
        return h(Tag, { color: 'green' }, () => '上次构建成功');
      } else if (color === 'red') {
        return h(Tag, { color: 'red' }, () => '上次构建失败');
      } else if (color === 'aborted') {
        return h(Tag, { color: 'sandyBrown' }, () => '上次构建取消');
      } else {
        return h(Tag, { color: 'dimGray' }, () => '上次构建没构建');
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
