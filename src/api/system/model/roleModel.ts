import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: query deployment list
 */
export interface RoleListResultModel {
  id: string;
  roleName: string;
  roleValue: string;
  status: number;
  orderNo: string;
  createTime: string;
  updateTime: string;
  remark: string;
}

export type RoleParams = BasicPageParams & {
  namespace?: string;
};
