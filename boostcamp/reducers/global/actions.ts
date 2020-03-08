export const FETCH_MOVIES = 'boostcamp/global/FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'boostcamp/global/FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'boostcamp/global/FETCH_MOVIES_ERROR';

export function fetchMovies(orderType: 0 | 1 | 2) {
  return {
    type: FETCH_MOVIES,
    orderType,
  };
}

export function fetchMoviesSuccess(orderType: 0 | 1 | 2, movies: any[]) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
    orderType,
  };
}

export function fetchMoviesError(error: any) {
  return {
    type: FETCH_MOVIES_ERROR,
    error,
  };
}
