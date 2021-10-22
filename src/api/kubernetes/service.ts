import { defHttp } from '/@/utils/http/axios';
import { ServiceListResultModel, ServiceParams } from './model/serviceModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  ServiceList = '/service/list',
}

/**
 * @description: query service list
 */
export function geServiceList(params?: ServiceParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<ServiceListResultModel>(
    {
      url: Api.ServiceList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
