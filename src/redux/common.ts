import rootReducer from './root.reducer';

export type RootState = ReturnType<typeof rootReducer>;

export type Action<TPayload> = {
  type: string;
  payload: TPayload;
};

interface ActionCreator<P> {
  type: string;
  (payload: P): Action<P>;
}

export function actionCreator<P>(type: string): ActionCreator<P> {
  return Object.assign((payload: P) => ({ type, payload }), { type });
}
