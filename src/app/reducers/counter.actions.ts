import { Action } from '@ngrx/store';

export enum ActionTypes {
  Intcrement = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset'
}

export class Intcrement implements Action {
  readonly type = ActionTypes.Intcrement;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}
