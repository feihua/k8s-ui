import { defHttp } from '/@/utils/http/axios';
import { StatefulsetListResultModel, StatefulsetParams } from './model/statefulsetModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  StatefulsetList = '/statefulset/list',
}

/**
 * @description: query deployment list
 */
export function geStatefulsetList(params?: StatefulsetParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<StatefulsetListResultModel>(
    {
      url: Api.StatefulsetList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
