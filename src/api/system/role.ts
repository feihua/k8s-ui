import { defHttp } from '/@/utils/http/axios';
import { RoleListResultModel, RoleParams } from './model/roleModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  RoleList = '/sys/role/list',
}

export function geRoleList(params?: RoleParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<RoleListResultModel>(
    {
      url: Api.RoleList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
