/**
 * @description: query deployment list
 */
export interface DeploymentListResultModel {
  name: string;
  namespace: string;
  strategy: string;
  replicas: string;
  updatedReplicas: string;
  readyReplicas: string;
  availableReplicas: string;
  observedGeneration: string;
  creationTimestamp: string;
  images: string;
  imagePullPolicy: string;
  lastUpdateTime: string;
  status: string;
}

export type DeploymentParams = {
  namespace?: string;
};
