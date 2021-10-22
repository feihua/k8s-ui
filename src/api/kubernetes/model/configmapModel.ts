/**
 * @description: query configMap list
 */
export interface ConfigMapListResultModel {
  name: string;
  nameSpace: string;
  creationTimestamp: string;
}

export type ConfigMapParams = {
  namespace?: string;
};
