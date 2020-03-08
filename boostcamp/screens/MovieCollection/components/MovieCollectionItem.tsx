import React from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';

const Container = styled.TouchableOpacity`
  width: 50%;
  flex-direction: column;
  align-items: center;
`;
const PosterImage = styled.Image`
  width: 90%;
  height: 300px;
`;
const Title = styled.Text``;
const BriefText = styled.Text``;
const DateText = styled.Text``;

export type MovieCollectionItemProps = {
  posterSource: ImageSourcePropType;
  title: string;
  brief: string;
  textDate: string;
};

export default function MovieCollectionItem({
  posterSource,
  title,
  brief,
  textDate,
}: MovieCollectionItemProps) {
  return (
    <Container>
      <PosterImage source={posterSource} />
      <Title>{title}</Title>
      <BriefText>{brief}</BriefText>
      <DateText>{textDate}</DateText>
    </Container>
  );
}
