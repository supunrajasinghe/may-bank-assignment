import { call, takeEvery, put } from 'redux-saga/effects';
import { FAILURE, SUCCESS, REQUEST } from '../utils/constants';

function* requestSaga(action: any) {
  try {
    // @ts-ignore
    const response = yield call(action.payload.api, action.payload.data);
    if (response.status >= 400) {
      yield put({ type: action.payload.action + FAILURE });
    } else if (response.status === 200 || response.status === 201) {
      yield put({
        type: action.payload.action + SUCCESS,
        payload: response.data,
      });
      yield put({ type: REQUEST + SUCCESS });
    }
  } catch (error) {
    yield put({ type: action.payload.action + FAILURE });
    yield put({ type: REQUEST + FAILURE });
  }
}

export default function* watcher() {
  yield takeEvery(REQUEST, requestSaga);
}
