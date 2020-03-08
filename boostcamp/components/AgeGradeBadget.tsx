import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;
const AgeText = styled.Text`
  color: white;
`;

export type AgeGradeBadgetProps = {
  age: number;
  size?: number;
};

export const AgeGradeColors = {
  0: 'blue',
  12: 'blue',
  15: 'orange',
  19: 'red',
};

export default function AgeGradeBadget({
  age,
  size = 20,
}: AgeGradeBadgetProps) {
  const color = AgeGradeColors[age] || 'red';
  return (
    <Container size={size} color={color}>
      <AgeText>{age}</AgeText>
    </Container>
  );
}
