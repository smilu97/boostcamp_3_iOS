import { combineReducers, createStore } from 'redux';
import globalReducer from './reducers/global';

const rootReducer = combineReducers({
  global: globalReducer,
});

const store = createStore(rootReducer);

export default store;
