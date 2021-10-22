import { defHttp } from '/@/utils/http/axios';
import { DeptListResultModel, DeptParams } from './model/deptModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  DeptList = '/sys/dept/list',
}

export function geDeptList(params?: DeptParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<DeptListResultModel>(
    {
      url: Api.DeptList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
