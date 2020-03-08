import React, { useEffect, useCallback, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getMovie } from '../../api';
import OverlayLoading from '../../components/OverlayLoading';
import DetailContent from './components/DetailContent';

function MovieDetail() {
  const route: any = useRoute();
  const [detail, setDetail] = useState(null);
  const { movie = {} } = route.params;
  const { id } = movie;

  const fail = useCallback(() => {}, []);

  const load = useCallback(async id => {
    const res = await getMovie(id);
    if (res.ok && res.status == 200) {
      setDetail(res.data);
    } else fail();
  }, []);

  useEffect(() => {
    if (id) {
      load(id);
    } else {
      fail();
    }
  }, []);

  return detail === null ? (
    <OverlayLoading show />
  ) : (
    <DetailContent detail={detail} />
  );
}

export default MovieDetail;
