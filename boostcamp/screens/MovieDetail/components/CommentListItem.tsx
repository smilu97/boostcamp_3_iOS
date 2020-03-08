import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import { Rating } from 'react-native-ratings';

// const sample = {
//   rating: 4,
//   contents: 'Out of range test 7:03',
//   timestamp: 1583402588.0,
//   movie_id: '5a54c286e8a71d136fb5378e',
//   writer: 'ㄲㄱ',
//   id: '5e60ce5c1b865e47a23e58e5',
// };

export type MovieComment = {
  rating: number;
  contents: string;
  timestamp: number;
  movie_id: string;
  writer: string;
  id: string;
};

export type CommentListItemProps = {
  comment: MovieComment;
};

export default function CommentListItem({ comment }: CommentListItemProps) {
  return (
    <Container>
      <ThumbContainer>
        <ThumbImage source={{ uri: 'http://via.placeholder.com/50x50' }} />
      </ThumbContainer>
      <DetailContainer>
        <WriterWrapper>
          <WriterText>{comment.writer}</WriterText>
          <Rating
            ratingCount={5}
            fractions={2}
            startingValue={comment.rating / 2}
            imageSize={15}
            showRating={false}
          />
        </WriterWrapper>
        <DateTimeText>
          {moment(comment.timestamp).format('YYYY-MM-DD HH:mm:ss')}
        </DateTimeText>
        <ContentText>{comment.contents}</ContentText>
      </DetailContainer>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;
const ThumbContainer = styled.View`
  width: 100px;
`;
const ThumbImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
const DetailContainer = styled.View``;
const WriterWrapper = styled.View`
  flex-direction: row;
`;
const WriterText = styled.Text`
  margin-right: 5px;
`;
const DateTimeText = styled.Text``;
const ContentText = styled.Text``;
