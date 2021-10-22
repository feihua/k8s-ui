import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: query deployment list
 */
export interface LogListResultModel {
  id: string;
  userName: string;
  status: string;
  ip: string;
  createBy: string;
  createTime: string;
}

export type LogParams = BasicPageParams & {
  namespace?: string;
};
