import { create } from 'apisauce';

const api = create({
  baseURL: 'http://connect-boxoffice.run.goorm.io/',
  headers: { Accept: 'application/json' },
});

export async function getMovies(orderType: 0 | 1 | 2) {
  return await api.get(`/movies?order_type=${orderType}`);
}

export default api;
