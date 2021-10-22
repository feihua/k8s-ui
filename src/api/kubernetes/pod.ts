import { defHttp } from '/@/utils/http/axios';
import { PodListResultModel, PodParams } from './model/podModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  PodList = '/pods/list',
  PodLog = '/pods/log',
}

/**
 * @description: query pod list
 */
export function gePodList(params?: PodParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<PodListResultModel>(
    {
      url: Api.PodList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function getPodLog(params?: PodParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<PodListResultModel>(
    {
      url: Api.PodLog,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
