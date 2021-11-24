import immutable from 'immutable';
import {
  LOGGED, LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from './action';

export const initialState = {
  isLogged: false,
  error: null,
};

const init = () => {
  const initValue = immutable.fromJS({
    data: undefined,
    isLoading: undefined,
    effect: 0,
  });

  return initValue
    .set('data', {
      ...initialState,
    })
    .set('isLoading', false)
    .set('effect', 0);
};

const homeReducer = (state = init(), action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state
        .set('isLoading', true)
        .update('data', data => ({
          ...data,
          error: null,
        }));
    }

    case LOGIN_ERROR: {
      const { response } = action;
      return state
        .update('data', data => ({
          ...data,
          error: response.message,
        }))
        .set('isLoading', false);
    }

    case LOGIN_SUCCESS: {
      const { response } = action;
      return state
        .set('isLoading', false)
        .update('data', data => ({
          ...data,
          ...response,
          isLogged: true,
          error: null,
        }));
    }

    case LOGGED: {
      return state.update('data', data => ({
        ...data,
        isLogged: true,
        error: null,
      }));
    }

    default:
      return state;
  }
};

export default homeReducer;
