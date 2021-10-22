import { defHttp } from '/@/utils/http/axios';
import { NodeListResultModel } from './model/nodeModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  NodeList = '/nodes/list',
}

/**
 * @description: query node list
 */
export function geNodeList(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<NodeListResultModel>(
    {
      url: Api.NodeList,
    },
    {
      errorMessageMode: mode,
    },
  );
}
