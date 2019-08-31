import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';

export const initialState = 0;

export function сounterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Intcrement:
      return state + 1;
    case ActionTypes.Decrement:
      return state - 1;
    case ActionTypes.Reset:
      return 0;
    default:
      return state;
  }
}
