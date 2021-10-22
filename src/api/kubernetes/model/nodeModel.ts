/**
 * @description: query node list
 */
export interface NodeListResultModel {
  name: string;
  status: string;
  oSImage: string;
  containerRuntimeVersion: string;
  kubeletVersion: string;
  architecture: string;
  creationTimestamp: string;
}
