import { Action } from "redux";

export interface PayloadAction<T, P> extends Action<T> {
  payload: P
}

export type { Action, Reducer } from 'redux'