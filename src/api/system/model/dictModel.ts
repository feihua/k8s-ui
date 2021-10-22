import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: query deployment list
 */
export interface DictListResultModel {
  id: string;
  value: string;
  label: string;
  type: string;
  description: string;
  sort: number;
  createBy: string;
  createTime: string;
  lastUpdateBy: string;
  lastUpdateTime: string;
  remarks: string;
}

export type DictParams = BasicPageParams & {
  namespace?: string;
};
