import { all } from 'redux-saga/effects';
import createLoginSaga from '../containers/home/state/saga';

export default function* rootSaga() {
  yield all([
    createLoginSaga(),
  ]);
}
