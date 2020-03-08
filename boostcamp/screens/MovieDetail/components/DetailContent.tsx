import React from 'react';
import { Rating } from 'react-native-ratings';
import {
  Container,
  Card,
  TitleArea,
  PosterImage,
  TitleDescArea,
  TitleText,
  DateText,
  GenreText,
  SynopsisTitleText,
  SynopsisText,
  BoxWrapper,
  Box,
  BoxTitleText,
  BoxContentText,
  TitleTextRow,
} from '../styled';
import CommentList from './CommentList';
import AgeGradeBadget from '../../../components/AgeGradeBadget';

export type MovieDetail = {
  audience: number;
  grade: number;
  actor: string;
  duration: number;
  reservation_grade: number;
  title: string;
  reservation_rate: number;
  user_rating: number;
  date: string;
  director: string;
  id: string;
  image: string;
  synopsis: string;
  genre: string;
};

export type DetailContentProps = {
  detail: MovieDetail;
};

export default function DetailContent({ detail }: DetailContentProps) {
  return (
    <Container>
      <Card>
        <TitleArea>
          <PosterImage source={{ uri: detail.image }} />
          <TitleDescArea>
            <TitleTextRow>
              <TitleText>{detail.title}</TitleText>
              <AgeGradeBadget age={detail.grade} />
            </TitleTextRow>

            <DateText>{detail.date}</DateText>
            <GenreText>{detail.genre}</GenreText>
          </TitleDescArea>
        </TitleArea>
        <BoxWrapper>
          <Box>
            <BoxTitleText>예매율</BoxTitleText>
            <BoxContentText>{detail.reservation_rate}</BoxContentText>
          </Box>
          <Box>
            <BoxTitleText>평점</BoxTitleText>
            <BoxContentText>{detail.user_rating}</BoxContentText>
            <Rating
              ratingCount={5}
              fractions={2}
              startingValue={detail.user_rating / 2}
              imageSize={20}
              showRating={false}
            />
          </Box>
          <Box>
            <BoxTitleText>누적 관객수</BoxTitleText>
            <BoxContentText>{detail.audience}</BoxContentText>
          </Box>
        </BoxWrapper>
      </Card>
      <Card>
        <SynopsisTitleText>줄거리</SynopsisTitleText>
        <SynopsisText>{detail.synopsis}</SynopsisText>
      </Card>
      <Card>
        <CommentList id={detail.id} />
      </Card>
    </Container>
  );
}
