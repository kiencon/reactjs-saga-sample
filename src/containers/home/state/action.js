export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGGED = 'LOGGED';

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  response,
});

export const loginError = (response) => ({
  type: LOGIN_ERROR,
  response,
});

export const logged = (payload) => ({
  type: LOGGED,
  payload,
});
