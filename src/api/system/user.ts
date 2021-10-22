import { defHttp } from '/@/utils/http/axios';
import { UserListResultModel, UserParams } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  UserList = '/sys/user/list',
}

export function geUserList(params?: UserParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<UserListResultModel>(
    {
      url: Api.UserList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
