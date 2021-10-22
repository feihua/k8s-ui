/**
 * @description: query deployment list
 */
export interface DeptListResultModel {
  id: string;
  name: string;
  parentId: number;
  orderNum: number;
  createBy: string;
  createTime: string;
  lastUpdateBy: string;
  lastUpdateTime: string;
}

export type DeptParams = {
  namespace?: string;
};
