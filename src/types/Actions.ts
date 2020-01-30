export interface ActionParams<T> {
    type: keyof T;
    value: T[keyof T];
  }