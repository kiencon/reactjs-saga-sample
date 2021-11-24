import { combineReducers } from 'redux';
import homeReducer from '../containers/home/state/reducer';

const reducer = combineReducers({
  homeReducer,
});

export default reducer;
