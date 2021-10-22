import { defHttp } from '/@/utils/http/axios';
import { NamespaceListResultModel } from './model/namespaceModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  NamespaceList = '/namespace/list',
  NamespaceListWith = '/namespace/listWith',
}

/**
 * @description: query namespace list
 */
export function geNamespaceList(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<NamespaceListResultModel>(
    {
      url: Api.NamespaceList,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function geNamespaceListWith(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<NamespaceListResultModel>(
    {
      url: Api.NamespaceListWith,
    },
    {
      errorMessageMode: mode,
    },
  );
}
