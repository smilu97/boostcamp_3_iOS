export const FETCH_MOVIES = 'boostcamp/global/FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'boostcamp/global/FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'boostcamp/global/FETCH_MOVIES_ERROR';

export function fetchMovies(orderType: number) {
  return {
    type: FETCH_MOVIES,
    orderType,
  };
}

export function fetchMoviesSuccess(movies: any[]) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
  };
}

export function fetchMoviesError(error: any) {
  return {
    type: FETCH_MOVIES_ERROR,
    error,
  };
}
