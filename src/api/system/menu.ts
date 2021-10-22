import { defHttp } from '/@/utils/http/axios';
import { MenuListResultModel, MenuParams } from './model/menuModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  MenuList = '/sys/menu/list',
}

export function getMenuList(params?: MenuParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<MenuListResultModel>(
    {
      url: Api.MenuList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
