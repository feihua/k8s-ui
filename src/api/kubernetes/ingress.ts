import { defHttp } from '/@/utils/http/axios';
import { IngressListResultModel, IngressParams } from './model/ingressModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  IngressList = '/ingress/list',
}

/**
 * @description: query ingress list
 */
export function getIngressList(params?: IngressParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<IngressListResultModel>(
    {
      url: Api.IngressList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
