import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_MOVIES,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMovies,
} from './actions';
import { getMovies } from '../../api';

function* fetchMoviesSaga({ orderType }: ReturnType<typeof fetchMovies>) {
  const res = yield call(getMovies, orderType);
  if (res.ok && res.status == 200) {
    yield put(fetchMoviesSuccess(orderType, res.data.movies));
  } else {
    yield put(fetchMoviesError(res));
  }
}

export default function* globalSaga() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesSaga);
}
