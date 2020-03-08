import styled from 'styled-components/native';

export const Container = styled.ScrollView``;
export const Card = styled.View`
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  min-height: 50px;
`;
export const TitleArea = styled.View`
  flex-direction: row;
`;
export const PosterImage = styled.Image`
  width: 160px;
  height: 240px;
`;
export const TitleDescArea = styled.View`
  justify-content: flex-end;
  padding-bottom: 20px;
`;
export const TitleTextRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TitleText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const DateText = styled.Text`
  font-size: 20px;
`;
export const GenreText = styled.Text`
  font-size: 20px;
`;
export const BoxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Box = styled.View`
  width: 33%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
`;
export const BoxTitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const BoxContentText = styled.Text``;
export const SynopsisTitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;
export const SynopsisText = styled.Text``;
