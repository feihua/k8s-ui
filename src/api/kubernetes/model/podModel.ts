/**
 * @description: query pod list
 */
export interface PodListResultModel {
  name: string;
  status: string;
  namespace: string;
  hostIP: string;
  podIP: string;
  restartCount: string;
  startTime: string;
  image: string;
  restartPolicy: string;
  serviceAccountName: string;
  nodeName: string;
  hostNetwork: string;
  creationTimestamp: string;
}

export type PodParams = {
  namespace?: string;
  podName?: string;
  tailLines?: number;
};
