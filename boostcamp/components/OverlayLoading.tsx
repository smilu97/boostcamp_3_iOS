import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export type OverlayLoadingProps = {
  size?: 'small' | 'large';
  color?: string;
  show?: boolean;
};

export default function OverlayLoading({
  size = 'large',
  color = '#0000ff',
  show = false,
}: OverlayLoadingProps) {
  if (!show) return null;
  return (
    <Container>
      <ActivityIndicator size={size} color={color} />
    </Container>
  );
}
