/**
 * @description: query deployment list
 */
export interface StatefulsetListResultModel {
  name: string;
  namespace: string;
  clusterName: string;
  creationTimestamp: string;
  labels: Map<string, string>;
  labelsStr: string;
}

export type StatefulsetParams = {
  namespace?: string;
};
