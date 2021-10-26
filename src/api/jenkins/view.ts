import { defHttp } from '/@/utils/http/axios';
import { ViewListResultModel, ViewJob, ViewParams } from './model/viewModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  ViewList = '/jenkins/getAllViews',
  ViewListWith = '/jenkins/getAllViewsWith',
  JobListWith = '/jenkins/getView',
}

/**
 * @description: query namespace list
 */
export function getViewList(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<ViewListResultModel>(
    {
      url: Api.ViewList,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function getViewListWith(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<ViewListResultModel>(
    {
      url: Api.ViewListWith,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function getJobListByView(params?: ViewParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<ViewJob>(
    {
      url: Api.JobListWith,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
