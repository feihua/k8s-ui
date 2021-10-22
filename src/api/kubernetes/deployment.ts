import { defHttp } from '/@/utils/http/axios';
import { DeploymentListResultModel, DeploymentParams } from './model/deploymentModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  DeploymentList = '/deployment/list',
}

/**
 * @description: query deployment list
 */
export function geDeploymentList(params?: DeploymentParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<DeploymentListResultModel>(
    {
      url: Api.DeploymentList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
