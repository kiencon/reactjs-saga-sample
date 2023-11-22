import { produce } from 'immer';
import { LOGGED, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './action';

const init = () => ({
  data: null,
  isLoading: false,
  effect: 0,
  isLogged: false,
  error: null,
});

const homeReducer = (state = init(), action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    }

    case LOGIN_ERROR: {
      const { response } = action;
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.data.error = response.message;
      });
    }

    case LOGIN_SUCCESS: {
      const { response } = action;
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.isLogged = true;
        draft.data = response;
      });
    }

    case LOGGED: {
      return produce(state, (draft) => {
        draft.isLogged = true;
        draft.error = null;
        draft.data = state.data;
      });
    }

    default: {
      return state;
    }
  }
};

export default homeReducer;
