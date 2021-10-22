/**
 * @description: query ingress list
 */
export interface IngressListResultModel {
  name: string;
  namespace: string;
  host: string;
  serviceName: string;
  servicePort: string;
  status: string;
  rules: string;
  address: string;
  creationTimestamp: string;
}

export type IngressParams = {
  namespace?: string;
};
