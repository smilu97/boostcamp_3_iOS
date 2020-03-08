import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import globalReducer from './reducers/global';
import globalSaga from './reducers/global/saga';
import { fetchMovies } from './reducers/global/actions';

export const saga = createSagaMiddleware();
const rootReducer = combineReducers({
  global: globalReducer,
});
const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(globalSaga);
store.dispatch(fetchMovies(0));

export default store;
