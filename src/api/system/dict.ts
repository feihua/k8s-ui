import { defHttp } from '/@/utils/http/axios';
import { DictListResultModel, DictParams } from './model/dictModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  DictList = '/sys/dict/list',
}

export function geDictList(params?: DictParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<DictListResultModel>(
    {
      url: Api.DictList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
