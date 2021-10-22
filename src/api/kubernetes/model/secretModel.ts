/**
 * @description: query secret list
 */
export interface SecretListResultModel {
  name: string;
  nameSpace: string;
  type: string;
  creationTimestamp: string;
}

export type SecretParams = {
  namespace?: string;
};
