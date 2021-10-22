import { defHttp } from '/@/utils/http/axios';
import { ConfigMapListResultModel, ConfigMapParams } from './model/configmapModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  ConfigMapList = '/configMap/list',
}

/**
 * @description: query configMap list
 */
export function geConfigMapList(params?: ConfigMapParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<ConfigMapListResultModel>(
    {
      url: Api.ConfigMapList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
