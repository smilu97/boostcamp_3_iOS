import React from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
const PosterImage = styled.Image`
  width: 80px;
  height: 120px;
  margin-right: 5px;
`;
const Description = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
const BriefText = styled.Text`
  font-weight: bold;
`;
const DateText = styled.Text``;

export type MovieCollectionItemProps = {
  posterSource: ImageSourcePropType;
  title: string;
  brief: string;
  textDate: string;
};

export default function MovieTableItem({
  posterSource,
  title,
  brief,
  textDate,
}: MovieCollectionItemProps) {
  return (
    <Container>
      <PosterImage source={posterSource} />
      <Description>
        <Title>{title}</Title>
        <BriefText>{brief}</BriefText>
        <DateText>{textDate}</DateText>
      </Description>
    </Container>
  );
}
