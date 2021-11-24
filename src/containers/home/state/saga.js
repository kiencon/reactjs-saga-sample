import { put, takeLeading } from 'redux-saga/effects';
import { Cookies } from '../../../utils';
import {
  loginError, loginSuccess, LOGIN_REQUEST
} from './action';
import { login } from './api';

export function* loginSaga({ payload }) {
  try {
    console.log('loginSaga', payload);
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
