import produce from 'immer';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from './actions';

const globalInitState = {
  fetchingMovies: true,
  errorMovies: null,
  movies: [],
};

function handleFetchMovies(state) {
  return produce(state, draft => {
    draft.fetchingMovies = true;
    draft.errorMovies = null;
  });
}

function handleFetchMoviesSuccess(state, { movies }) {
  return produce(state, draft => {
    draft.fetchingMovies = false;
    draft.errorMovies = null;
    draft.movies = movies;
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
