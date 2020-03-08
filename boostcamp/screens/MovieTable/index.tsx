import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { Container, InfoContainer, InfoText } from './styled';
import OverlayLoading from '../../components/OverlayLoading';
import { StyleSheet } from 'react-native';
import MovieTableItem from './components/MovieTableItem';
import { useNavigation } from '@react-navigation/native';

function makeBrief(item) {
  const { reservation_grade: grade, reservation_rate, user_rating } = item;
  return `${grade}위(${reservation_rate}) / ${user_rating}%`;
}

function MovieTable() {
  const navigation = useNavigation();

  const [fetching, movies] = useSelector(({ global }) => [
    global.fetchingMovies,
    global.movies,
  ]);

  const navigateDetail = useCallback(movie => {
    navigation.navigate('MovieDetail', { movie });
  }, []);

  const renderedItems = movies.map(item => (
    <MovieTableItem
      key={item.title}
      onPress={() => navigateDetail(item)}
      posterSource={{ uri: item.thumb }}
      title={item.title}
      brief={makeBrief(item)}
      grade={item.grade}
      textDate={item.date}
    />
  ));

  const renderedInfo = useMemo(
    () => (
      <InfoContainer>
        <InfoText>{'No items!'}</InfoText>
      </InfoContainer>
    ),
    []
  );

  return (
    <>
      <OverlayLoading show={fetching} />
      {movies.length === 0 ? (
        renderedInfo
      ) : (
        <Container contentContainerStyle={styles.container}>
          {renderedItems}
        </Container>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
});

export default MovieTable;
