export type ViewParams = {
  name?: string;
};

export interface ViewListResultModel {
  description: string;
  name: string;
  property: any[];
  url: string;
}

export interface ViewJob {
  name: string;
  url: string;
  color: string;
}
