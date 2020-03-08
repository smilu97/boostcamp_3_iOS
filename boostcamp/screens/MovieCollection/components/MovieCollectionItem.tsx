import React from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';
import AgeGradeBadget from '../../../components/AgeGradeBadget';

const Container = styled.TouchableOpacity`
  width: 50%;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const PosterImage = styled.ImageBackground`
  width: 90%;
  height: 300px;
  align-items: flex-end;
  padding: 10px;
`;
const Title = styled.Text``;
const BriefText = styled.Text``;
const DateText = styled.Text``;

export type MovieCollectionItemProps = {
  onPress?: () => any;
  posterSource: ImageSourcePropType;
  title: string;
  brief: string;
  grade: number;
  textDate: string;
};

export default function MovieCollectionItem({
  onPress,
  posterSource,
  title,
  brief,
  grade,
  textDate,
}: MovieCollectionItemProps) {
  return (
    <Container onPress={onPress}>
      <PosterImage source={posterSource}>
        <AgeGradeBadget age={grade} size={30} />
      </PosterImage>
      <Title>{title}</Title>
      <BriefText>{brief}</BriefText>
      <DateText>{textDate}</DateText>
    </Container>
  );
}
