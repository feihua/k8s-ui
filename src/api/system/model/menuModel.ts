/**
 * @description: query deployment list
 */
export interface MenuListResultModel {
  id: number;
  key: string;
  name: string;
  title: string;
  parentId: number;
  url: string;
  perms: string;
  type: string;
  icon: string;
  orderNum: number;
  createBy: string;
  createTime: string;
  lastUpdateBy: string;
  lastUpdateTime: string;
}

export type MenuParams = {
  namespace?: string;
};
