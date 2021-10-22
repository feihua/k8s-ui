import { defHttp } from '/@/utils/http/axios';
import { SecretListResultModel, SecretParams } from './model/secretModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  SecretList = '/secret/list',
}

/**
 * @description: query secret list
 */
export function getSecretList(params?: SecretParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<SecretListResultModel>(
    {
      url: Api.SecretList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
