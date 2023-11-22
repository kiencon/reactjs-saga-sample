import { put, takeLeading } from 'redux-saga/effects';
import { Cookies } from '../../../utils';
import { LOGIN_REQUEST, loginError, loginSuccess } from './action';
import { login } from './api';

export function* loginSaga({ payload }) {
  try {
    const { email, password } = payload;
    const result = yield login(email, password);
    Cookies.set('authToken', result.data.authToken);
    yield put(loginSuccess(result.data));
  } catch (error) {
    yield put(loginError(error));
  }
}

export default function* createLoginSaga() {
  yield takeLeading(LOGIN_REQUEST, loginSaga);
}
