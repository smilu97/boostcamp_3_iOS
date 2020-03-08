import produce from 'immer';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from './actions';

const globalInitState = {
  fetchingMovies: false,
  errorMovies: null,
  orderType: 0,
  movies: [],
};

function handleFetchMovies(state) {
  return produce(state, draft => {
    draft.fetchingMovies = true;
    draft.errorMovies = null;
  });
}

function handleFetchMoviesSuccess(state, { orderType, movies }) {
  return produce(state, draft => {
    draft.fetchingMovies = false;
    draft.errorMovies = null;
    draft.movies = movies;
    draft.orderType = orderType;
  });
}

function handleFetchMoviesError(state, { error }) {
  return produce(state, draft => {
    draft.fetchingMovies = false;
    draft.errorMovies = error;
  });
}

const handlers = {
  [FETCH_MOVIES]: handleFetchMovies,
  [FETCH_MOVIES_SUCCESS]: handleFetchMoviesSuccess,
  [FETCH_MOVIES_ERROR]: handleFetchMoviesError,
};

export default function globalReducer(state = globalInitState, action) {
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
}
