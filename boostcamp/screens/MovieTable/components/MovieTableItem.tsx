import React from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';
import AgeGradeBadget from '../../../components/AgeGradeBadget';

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  background-color: white;
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
const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
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
  onPress?: () => any;
  posterSource: ImageSourcePropType;
  title: string;
  brief: string;
  grade: number;
  textDate: string;
};

export default function MovieTableItem({
  onPress,
  posterSource,
  title,
  brief,
  grade,
  textDate,
}: MovieCollectionItemProps) {
  return (
    <Container onPress={onPress}>
      <PosterImage source={posterSource} />
      <Description>
        <TitleRow>
          <Title>{title}</Title>
          <AgeGradeBadget age={grade} />
        </TitleRow>
        <BriefText>{brief}</BriefText>
        <DateText>{textDate}</DateText>
      </Description>
    </Container>
  );
}
