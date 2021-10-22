import { defHttp } from '/@/utils/http/axios';
import { LogListResultModel, LogParams } from './model/logModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  LogList = '/sys/loginLog/list',
}

export function geLogList(params?: LogParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LogListResultModel>(
    {
      url: Api.LogList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
