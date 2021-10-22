import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: query deployment list
 */
export interface UserListResultModel {
  id: string;
  name: string;
  nickName: string;
  avatar: string;
  email: string;
  mobile: string;
  status: string;
  deptId: string;
  createBy: string;
  createTime: string;
  lastUpdateBy: string;
  lastUpdateTime: string;
  jobId: string;
  roleId: string;
  roleName: string;
  jobName: string;
  deptName: string;
}

export type UserParams = BasicPageParams & {
  namespace?: string;
};
