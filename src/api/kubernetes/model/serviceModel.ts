/**
 * @description: query service list
 */
export interface ServiceListResultModel {
  name: string;
  namespace: string;
  type: string;
  clusterIP: string;
  protocol: string;
  ports: string;
  targetPort: string;
  nodePort: string;
  creationTimestamp: string;
}

export type ServiceParams = {
  namespace?: string;
};
