export interface SetStorage {
  set: (key: string, value: any) => void;
}

export interface GetStorage {
  get: (key: string) => any;
}
