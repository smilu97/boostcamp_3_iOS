import { create } from 'apisauce';

const api = create({
  baseURL: 'http://connect-boxoffice.run.goorm.io/',
  headers: { Accept: 'application/json' },
});

export async function getMovies(orderType: 0 | 1 | 2) {
  return await api.get(`/movies?order_type=${orderType}`);
}

export async function getMovie(id: string) {
  return await api.get('/movie', { id });
}

export async function getComments(id: string) {
  return await api.get('/comments', { movie_id: id });
}

export default api;
